class Api::DressesController < ApplicationController
  before_action :require_admin!
  def index
    @dresses = Dress.all
    render :index
  end

  def show
    @dress = Dress.find(params[:id])
  end

  def create
    @dress = Dress.new(dress_params)
    if @dress.save
      render :show
    else
      render json: @dress.errors, status: 422
    end
  end

  def update

  end

  def destoy

  end

  private

  def dress_params
    params.require(:dress).permit(:title, :color, :waist, :min_waist,
      :max_waist, :sleeve_length, :height, :image)
  end
end
