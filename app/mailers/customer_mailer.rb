class CustomerMailer < ApplicationMailer

  def remind_to_return(customer)
    @customer = customer
    mail(to: @customer.email, subject: 'Reminder')
  end
end
