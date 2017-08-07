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

require 'test_helper'

class DressOrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
