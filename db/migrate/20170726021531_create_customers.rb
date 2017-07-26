class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :address
      t.text :notes
      
      t.timestamps null: false
    end
  end
end
