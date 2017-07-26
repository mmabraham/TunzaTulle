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

  has_many :orders
  has_many :customers,
    through :orders,
    source :customer
end
