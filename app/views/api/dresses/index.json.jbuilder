@dresses.each do |dress|
  json.set! dress.id do
    json.extract! dress, :id, :barcode, :title, :color, :description,
      :price, :waist, :min_waist, :max_waist, :sleeve_length, :height
    json.img asset_path(dress.image)
  end
end
