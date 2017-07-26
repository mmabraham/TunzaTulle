class Customer < ActiveRecord::Base
  has_many :orders

  has_many :dresses,
    through :orders,
    source :dress
end
