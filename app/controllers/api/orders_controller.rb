class Api::OrdersController < ApplicationController
  before_action :require_admin!
  def index
    if params[:customer_id]
      @orders = Order
        .includes(:customer, :dress_orders ,:dresses)
        .where(customer_id: params[:customer_id])
        .order(:start_date)
    else
      @orders = Order
        .includes(:customer, :dress_orders ,:dresses)
        .order(:start_date)
    end
    render :index
  end

  def show
    @order = Order.find(params[:id])
    if @order
      render :show
    else
      render json: {}, status: 404
    end
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order.id
    else
      render json: @order.errors, status: 422
    end
  end

  def update
    @order = Order.find(params[:id])
    if @order.update(order_params)
      render json: @order.id
    else
      render json: @order.errors, status: 422
    end
  end

  def destroy
    @order = Order.find(params[:id])
    if @order.destroy
      render json: {}
    else
      render json: {}, status: 422
    end
  end

  def order_params
    params
      .require(:order)
      .permit(
        :status, :start_date, :end_date, :event_date, :customer_id, dress_ids: []
      )
  end
end
