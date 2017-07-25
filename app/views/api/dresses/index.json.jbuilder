@dresses.each do |dress|
  json.partial! 'api/dresses/dress', dress: dress
end
