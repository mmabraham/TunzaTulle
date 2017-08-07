class Api::OrdersController < ApplicationController
  before_action :require_admin!
  def index
    @orders = Order.includes(:customer, :dresses).order(:start_date)
    render :index
  end
end
