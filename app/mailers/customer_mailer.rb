class CustomerMailer < ApplicationMailer

  def remind_to_return(order)
    @order = order
    @customer = order.customer
    mail(to: @customer.email, subject: 'Reminder')
  end
end
