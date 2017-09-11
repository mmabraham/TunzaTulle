class AddAgeToDresses < ActiveRecord::Migration
  def change
    add_column :dresses, :age, :integer, null: false
    add_column :dresses, :min_age, :integer, null: false
    add_column :dresses, :max_age, :integer, null: false
  end
end
