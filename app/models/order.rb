class Order < ActiveRecord::Base
  before_save :ensure_customer!
  validates :customer, :dress, :event_date, :start_date, :end_date,
    precence: true
  validates :status, inclusion: ['pending', 'approved', 'shipped', 'returned']

  belongs_to :customer
  balongs_to :dress

  def ensure_customer
    self.customer ||= Customer.new
  end
end
