# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Customer.destroy_all

customers = []
20.times do
  customers << Customer.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.cell_phone,
    address:  Faker::Address.street_address + ' ' + Faker::Address.state + ' ' + Faker::Address.zip_code,
    notes: Faker::Hipster.paragraph
  )
end

images = []
Dir.foreach('seed-images/dresses') do |fname|
  next if fname[0] == '.'
  images << File.open("seed-images/dresses/#{fname}")
end

Dress.destroy_all
dresses = []

48.times do |i|
  waist = rand(300..500) / 10.0
  dresses << Dress.create(
    barcode: Faker::Code.ean,
    title: Faker::Commerce.product_name,
    color: Faker::Color.color_name,
    description: Faker::Hipster.paragraph,
    price: rand(50000),
    waist: waist,
    min_waist: waist - 0.5,
    max_waist: waist + 0.5,
    sleeve_length: ['long', 'half length', 'Half Length', '3 / 4'].sample,
    height: rand(400..700) / 10.0,
    image: images[i]
  )
end
