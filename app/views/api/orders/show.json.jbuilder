json.set! @order.id do
  json.extract! @order, :id, :event_date, :start_date, :end_date, :status
  json.dresses @order.dresses do |dress|
    json.extract! dress, :id, :barcode, :title, :color, :description,
      :price, :waist, :min_waist, :max_waist, :sleeve_length, :height
    json.img asset_path(dress.image)
  end
  json.customer do
    json.merge! @order.customer.attributes
  end
end
