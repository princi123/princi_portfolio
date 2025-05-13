# app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
  default from: 'no-reply@example.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Happy to Connect with you!')
  end
end
