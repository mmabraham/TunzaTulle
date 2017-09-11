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

require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
