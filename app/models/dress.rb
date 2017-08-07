# == Schema Information
#
# Table name: dresses
#
#  id                 :integer          not null, primary key
#  barcode            :string
#  title              :string           not null
#  color              :string           not null
#  description        :text
#  price              :decimal(, )
#  waist              :decimal(, )      not null
#  min_waist          :decimal(, )      not null
#  max_waist          :decimal(, )      not null
#  sleeve_length      :string           not null
#  height             :decimal(, )      not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Dress < ActiveRecord::Base
  validates :title, :color, :waist, :min_waist, :max_waist,
    :sleeve_length, :height, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :dress_orders
  has_many :orders, through: :dress_orders, source: :order
  has_many :customers, through: :orders, source: :customer

  def self.filter(filters)
    dresses = Dress.all
    return dresses unless filters
    dresses = Dress.by_dates(filters[:dates], dresses) if filters[:dates]
    dresses = Dress.by_height(filters[:height], dresses) if filters[:height]
    dresses = Dress.by_waist(filters[:waist], dresses) if filters[:waist]
    dresses = Dress.by_price(filters[:price], dresses) if filters[:price]
    dresses = Dress.by_sleeve_length(filters[:sleeve_length], dresses) if filters[:sleeve_length]
    dresses = Dress.by_color(filters[:color], dresses) if filters[:color]
    dresses
  end

  private

  def self.by_dates(dates, dresses = Dress.all)
    start = Time.parse(dates[:start_date])
    finish = Time.parse(dates[:end_date])

    dresses.where.not(
      id: Order.conflicting(start, finish).joins(:dress_orders).select('dress_orders.dress_id')
    )
  end

  def self.by_height(height, dresses)
    dresses.where(height: height)
  end

  def self.by_waist(waist, dresses)
    dresses
      .where('min_waist <= ?', waist)
      .where('max_waist >= ?', waist)
  end

  def self.by_price(price, dresses)
    min, max = price[:min], price[:max]
    dresses
    .where('price <= ?', max)
    .where('price >= ?', min || 0)
  end

  def self.by_sleeve_length(sleeve_length, dresses)
    dresses.where(sleeve_length: sleeve_length)
  end

  def self.by_color(color, dresses)
    dresses.where(color: color)
  end
end
