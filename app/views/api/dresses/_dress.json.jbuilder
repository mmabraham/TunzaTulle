json.extract! dress, :id, :barcode, :title, :color, :description,
  :waist, :min_waist, :max_waist, :sleeve_length, :height
json.img asset_path(dress.image)
json.order_dates  dress.orders, :start_date, :end_date, :id
