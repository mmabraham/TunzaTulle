class Api::CustomersController < ApplicationController
  before_action :require_admin!
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
    if Time.new.hour < 6
      render json: "Too early"
    else
      @orders = Order.includes(:customer, :dresses).reminder_due
      @orders.each do |order|
        msg = CustomerMailer.remind_to_return(order)
        msg.deliver_now
        order.reminder_sent = true
        order.save
      end

      render json: "Sent #{@orders.count} reminders"
    end
  end

  def customer_params
    params.require(:customer).permit(:name, :email, :phone_number, :address, :notes)
  end
end
