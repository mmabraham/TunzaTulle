# == Schema Information
#
# Table name: dress_orders
#
#  id         :integer          not null, primary key
#  order_id   :integer          not null
#  dress_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DressOrder < ActiveRecord::Base
  validates :dress, :order, presence: true

  belongs_to :dress, dependent: :destroy
  belongs_to :order, dependent: :destroy
end
