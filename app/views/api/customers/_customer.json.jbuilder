customer.set customer.id do
  json.merge! customer.attributes
end
