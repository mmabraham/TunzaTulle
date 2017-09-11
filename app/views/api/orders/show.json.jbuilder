json.set! @order.id do
  json.extract! @order, :id, :event_date, :start_date, :end_date, :status
  json.dresses @order.dresses do |dress|
    json.extract! dress, :id, :barcode, :title, :color, :description,
      :waist, :min_waist, :max_waist, :sleeve_length, :height, :min_height,
      :max_height, :age, :min_age, :max_age
    json.img asset_path(dress.image)
  end
  json.customer do
    json.merge! @order.customer.attributes
  end
end
