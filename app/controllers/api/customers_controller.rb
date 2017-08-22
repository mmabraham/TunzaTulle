class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render :index
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render :show
    else
      render json: @customer.errors
    end
  end

  def update
    @customer = Customer.find(params[:id])
    if @customer.update(customer_params)
      render :show
    else
      render json: @customer.errors, status: 422
    end
  end

  def show
    @customer = Customer.find(params[:id])
    render :show
  end

  def customer_params
    params.require(:customer).permit(:name, :email, :phone_number, :address, :notes)
  end
end
