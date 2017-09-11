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
    waist: waist,
    min_waist: waist - 0.5,
    max_waist: waist + 0.5,
    sleeve_length: ['long', 'half length', 'Half Length', '3 / 4'].sample,
    height: rand(400..700) / 10.0,
    image: images[i]
  )
end

Order.destroy_all
orders = []

seconds_in_day = 60 * 60 * 24
seconds_in_week = seconds_in_day * 7
base = Time.now - seconds_in_week * 20

200.times do |i|
  event_date = base + seconds_in_day * i
  order = Order.new(
    status: ['pending', 'approved', 'shipped', 'returned'].sample,
    event_date: event_date,
    start_date: event_date - seconds_in_week,
    end_date: event_date + seconds_in_week
  )
  order.customer = customers.sample
  order.save
  orders << order
end

DressOrder.destroy_all
dress_count = dresses.length
dress_idx = 0
orders.each do |order|
  loop do
    dress_order = DressOrder.new
    dress_order.dress = dresses[dress_idx % dress_count]
    order.dress_orders << dress_order
    dress_idx += 1
    break if [true, false].sample
  end
  order.save
end
