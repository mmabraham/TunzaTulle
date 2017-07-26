class Order < ActiveRecord::Base
  before_save :ensure_customer!
  validates :dress, :event_date, :start_date, :end_date,
    presence: true
  validates :status, inclusion: ['pending', 'approved', 'shipped', 'returned']

  belongs_to :customer
  belongs_to :dress

  def ensure_customer!
    self.customer ||= Customer.new
  end
end
