# == Schema Information
#
# Table name: orders
#
#  id            :integer          not null, primary key
#  customer_id   :integer          not null
#  event_date    :datetime         not null
#  start_date    :datetime         not null
#  end_date      :datetime         not null
#  status        :string           default("pending"), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  reminder_sent :boolean          default("false")
#

class Order < ActiveRecord::Base
  before_save :ensure_customer!
  validates :event_date, :start_date, :end_date, presence: true
  validate :starts_before_event, :ends_after_event, :has_no_conflicting_orders
  validates :status, inclusion: ['pending', 'approved', 'shipped', 'returned', 'canceled']

  def self.conflicting(start_date, end_date)
    where('start_date <= ? AND end_date >= ?', end_date, start_date)
  end

  def self.current
    where('? BETWEEN start_date AND end_date', Time.now)
  end

  def self.past
    where('end_date < ?', Time.now)
  end

  def self.future
    where('start_date > ?', Time.now)
  end

  def self.event_was_yesterday
    where("DATE(event_date) = ?", Date.today-1)
  end

  def self.reminder_due
    event_was_yesterday.where(reminder_sent: false)
  end

  def self.by_status(status)
    status ? where(status: status) : self
  end

  def self.safe_phases(raw_phases)
    safe = Set.new(['past', 'current', 'future'])
    raw_phases.select { |phase| safe.include?(phase)}
  end

  def self.by_phase(phases)
    return all if phases.nil?
    safe_phases(phases)
      .reduce(Order.none) { |acc, phase| acc + send(phase) }
  end

  def self.filter(filters)
    self
      .by_status(filters[:status])
      .by_phase(filters[:phase])
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

  def has_no_conflicting_orders
    errors.add(:dresses, 'cannot double order any dresses') unless conflicting_orders.empty?
  end

  def dress_ids=(dress_ids)
    self.dresses = Dress.find(dress_ids)
  end

  private

  def overlapping_orders
    Order
      .conflicting(start_date, end_date)
      .where.not(id: id)
  end

  def conflicting_orders
    overlapping_orders
      .joins(:dress_orders)
      .where('dress_orders.dress_id' => self.dresses)
  end
end
