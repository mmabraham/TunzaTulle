class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render :index
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render json: @customer
    else
      render json: @customer.errors
    end
  end

  def customer_params
    params.require(:customer).permit(:name, :email, :phone_number, :address, :notes)
  end
end
