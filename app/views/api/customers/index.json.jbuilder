@customers.each do |customer|
  json.partial! 'api/customers/customer', customer: customer
end
