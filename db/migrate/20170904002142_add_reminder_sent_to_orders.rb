class AddReminderSentToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :reminder_sent, :boolean, default: false
  end
end
