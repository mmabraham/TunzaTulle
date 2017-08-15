json.set! @dress.id do
  json.partial! 'api/dresses/dress', dress: @dress
  json.orders do
    json.array! @dress.orders do |order|
      json.partial! 'api/orders/order', order: order
    end
  end
end
