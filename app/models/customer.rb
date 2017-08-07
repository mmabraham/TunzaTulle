# == Schema Information
#
# Table name: customers
#
#  id           :integer          not null, primary key
#  name         :string
#  email        :string
#  phone_number :string
#  address      :string
#  notes        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Customer < ActiveRecord::Base
  has_many :orders

  has_many :dresses,
    through: :orders,
    source: :dress
end
