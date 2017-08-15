@dresses.each do |dress|
  json.set! dress.id do
    json.partial! 'api/dresses/dress', dress: dress
  end
end
