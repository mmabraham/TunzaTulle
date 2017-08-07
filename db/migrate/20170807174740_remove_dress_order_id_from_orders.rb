class RemoveDressOrderIdFromOrders < ActiveRecord::Migration
  def change
    remove_column :orders, :dress_order_id, :integer
  end
end
