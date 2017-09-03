class CustomerMailer < ApplicationMailer

  def remind_to_return
    @customer = Customer.first
    mail(to: @customer.email, subject: 'Reminder')
  end
end
