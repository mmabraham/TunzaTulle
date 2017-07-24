# == Schema Information
#
# Table name: dresses
#
#  id            :integer          not null, primary key
#  barcode       :string
#  title         :string           not null
#  color         :string           not null
#  description   :text
#  price         :decimal(, )
#  waist         :decimal(, )      not null
#  min_waist     :decimal(, )      not null
#  max_waist     :decimal(, )      not null
#  sleeve_length :string           not null
#  height        :decimal(, )      not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class DressTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
