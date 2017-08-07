class CreateDressOrders < ActiveRecord::Migration
  def change
    create_table :dress_orders do |t|
      t.integer :order_id, null: false
      t.integer :dress_id, null: false
      t.timestamps null: false
    end

    add_index :dress_orders, :order_id
    add_index :dress_orders, :dress_id
  end
end
