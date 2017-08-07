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
  validates :event_date, :start_date, :end_date,
    presence: true
  validates :status, inclusion: ['pending', 'approved', 'shipped', 'returned']

  scope :active, -> { where('? BETWEEN start_date AND end_date', Time.now) }
  scope :past, -> { where('end_date < ?', Time.now) }
  scope :future, -> { where('start_date > ?', Time.now) }
  scope :conflicting, ->(start_date, end_date) {
    where('start_date <= ? AND end_date >= ?', end_date, start_date)
  }


  belongs_to :customer
  has_many :dress_orders
  has_many :dresses, through: :dress_orders, source: :dress

  def ensure_customer!
    self.customer ||= Customer.new
  end
end
