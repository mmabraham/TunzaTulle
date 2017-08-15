json.extract! order, :id, :event_date, :start_date, :end_date, :status
json.dress_ids order.dress_orders, :dress_id
json.customer_id order.customer.id
