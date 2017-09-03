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

  def send_all_reminders
    @orders = Order.includes(:customer, :dresses).event_was_yesterday
    @orders.each do |order|
      msg = CustomerMailer.remind_to_return(order)
      msg.deliver_now
    end

    render json: "Sent #{@orders.count} reminders"
  end

  def customer_params
    params.require(:customer).permit(:name, :email, :phone_number, :address, :notes)
  end
end
