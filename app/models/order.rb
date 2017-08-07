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
  validates :dress, :event_date, :start_date, :end_date,
    presence: true
  validates :status, inclusion: ['pending', 'approved', 'shipped', 'returned']

  belongs_to :customer
  has_many :dress_orders
  has_many :dresses, through: :dress_orders, source: :dress

  def ensure_customer!
    self.customer ||= Customer.new
  end
end
