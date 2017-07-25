class Api::UsersController < ApplicationController
  before_action :require_admin!, only: :update, :index
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    user = User.find(params.id)
    user.admin = true
    if user.save
      @users = User.all
      render :index
    else
      render json: user.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
