
json.orders do
  @orders.each do |order|
    json.set! order.id do
      json.extract! order, :id, :event_date, :start_date, :end_date, :status
      json.dress_ids order.dress_orders.pluck(:dress_ids)
      json.customer_id order.customer.id
    end
  end
end
