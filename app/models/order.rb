# == Schema Information
#
# Table name: orders
#
#  id          :integer          not null, primary key
#  customer_id :integer          not null
#  event_date  :datetime         not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  status      :string           default("pending"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Order < ActiveRecord::Base
  before_save :ensure_customer!
  validates :event_date, :start_date, :end_date, presence: true
  validate :starts_before_event, :ends_after_event
  validates :status, inclusion: ['pending', 'approved', 'shipped', 'returned', 'canceled']

  def self.active
    where('? BETWEEN start_date AND end_date', Time.now)
  end

  def self.past
    where('end_date < ?', Time.now)
  end

  def self.future
    where('start_date > ?', Time.now)
  end

  belongs_to :customer
  has_many :dress_orders
  has_many :dresses, through: :dress_orders, source: :dress

  def ensure_customer!
    self.customer ||= Customer.new
  end

  def starts_before_event
    errors.add(:start_date, 'cannot be after event date') if start_date && start_date > event_date
  end

  def ends_after_event
    errors.add(:end_date, 'cannot be before event date') if end_date && end_date < event_date
  end

  def dress_ids=(dress_ids)
    self.dresses = Dress.find(dress_ids)
  end

  def overlapping_orders
    Order
    .where('start_date <= ? AND end_date >= ?', end_date, start_date)
    .where.not(id: id)
  end

end
