class AddIndexToOrders < ActiveRecord::Migration
  def change
    add_index :orders, :customer_id
  end
end
