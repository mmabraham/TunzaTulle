class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :customer_id, null: false
      t.integer :dress_id, null: false
      t.datetime :event_date, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.string :status, null: false, default: 'pending'

      t.timestamps null: false
    end
  end
end
