class Api::OrdersController < ApplicationController
  before_action :require_admin!
  def index
    @orders = Order.includes(:customer, :dress_orders ,:dresses).order(:start_date)
    render :index
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order
    else
      render json: @order.errors, status: 422
    end
  end

  def order_params
    params
    .require(:order)
    .permit(:status, :start_date, :end_date, :event_date, :customer_id)
  end
end
