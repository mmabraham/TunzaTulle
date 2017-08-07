class ChangeOrderToReferenceDressOrder < ActiveRecord::Migration
  def change
    rename_column :orders, :dress_id, :dress_order_id
  end
end
