class CreateDresses < ActiveRecord::Migration
  def change
    create_table :dresses do |t|
      t.string :barcode
      t.string :title, null: false
      t.string :color, null: false
      t.text :description
      t.decimal :price
      t.decimal :waist, null: false
      t.decimal :min_waist, null: false
      t.decimal :max_waist , null: false
      t.string :sleeve_length, null: false
      t.decimal :height, null: false

      t.timestamps null: false
    end
  end
end
