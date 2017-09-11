# == Schema Information
#
# Table name: dresses
#
#  id                 :integer          not null, primary key
#  barcode            :string
#  title              :string           not null
#  color              :string           not null
#  description        :text
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
#  min_height         :decimal(, )      not null
#  max_height         :decimal(, )      not null
#  age                :integer          not null
#  min_age            :integer          not null
#  max_age            :integer          not null
#

class Dress < ActiveRecord::Base
  validates :title, :color, :waist, :min_waist, :max_waist,
    :age, :min_age, :max_age, :height, :min_height, :max_height,
    :sleeve_length, presence: true
  validate :ranges

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :dress_orders
  has_many :orders, through: :dress_orders, source: :order
  has_many :customers, through: :orders, source: :customer

  def self.filter(filters)
    return all unless filters
    all
      .by_dates(filters[:dates])
      .by_height(filters[:height])
      .by_waist(filters[:waist])
      .by_age(filters[:age])
      .by_sleeve_length(filters[:sleeve_length])
      .by_color(filters[:color])
  end

  def self.by_dates(dates)
    return all if dates.nil?

    start = Time.parse(dates[:start_date])
    finish = Time.parse(dates[:end_date])
    where.not(
      id: Order
        .conflicting(start, finish)
        .joins(:dress_orders)
        .select('dress_orders.dress_id')
    )
  end

  def self.by_waist(waist)
    return all if waist.nil? || waist.empty?

    where('min_waist <= ?', waist)
      .where('max_waist >= ?', waist)
  end

  def self.by_age(age)
    return all if age.nil? || age.empty?

    where('min_age <= ?', age)
      .where('max_age >= ?', age)
  end

  def self.by_height(height)
    return all if height.nil? || height.empty?

    where('min_height <= ?', height)
      .where('max_height >= ?', height)
  end

  def self.by_sleeve_length(sleeve_length)
    return all if sleeve_length.nil? || sleeve_length.empty?
    where(sleeve_length: sleeve_length)
  end

  def self.by_color(color)
    return all if color.nil? || color.empty?
    where(color: color)
  end

  private

  def ranges
    [:age, :waist, :height].each { |field| check_range(field) }
  end

  def check_range(field)
    min, mid, max = send("min_#{field}"), send(field), send("max_#{field}")
    if min && mid && min > mid
      errors["min_#{field}".to_sym] << "min_#{field} cannot be greater than #{field}"
    end
    if max && mid &&  max < mid
      errors["max_#{field}".to_sym] << "max_#{field} cannot be less than #{field}"
    end
  end
end
