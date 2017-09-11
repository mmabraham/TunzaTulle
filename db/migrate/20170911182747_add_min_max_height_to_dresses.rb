class AddMinMaxHeightToDresses < ActiveRecord::Migration
  def change
    add_column :dresses, :min_height, :decimal, null: false
    add_column :dresses, :max_height, :decimal, null: false
  end
end
