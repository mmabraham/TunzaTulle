class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render :index
  end

  def customer_params
    params.require(:customer).permit(:name, :email, :phone_number, :address, :notes)
  end
end
