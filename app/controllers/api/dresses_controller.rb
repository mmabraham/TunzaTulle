class Api::DressesController < ApplicationController
  before_action :require_admin!
  def index
    @dresses = Dress.filter(params[:filters]).includes(:orders)
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
    @dress = Dress.find(params[:id])
    if @dress.update(dress_params)
      render json: @dress.id
    else
      render json: @dress.errors, status: 422
    end
  end

  def destroy
    @dress = Dress.find(params[:id])
    if @dress.destroy
      render json: @dress.id
    else
      render json: @dress.errors, status: 422
    end
  end

  private

  def dress_params
    params.require(:dress).permit(
      :title, :color, :waist, :min_waist,
      :max_waist, :sleeve_length, :height, :min_height, :max_height,
      :age, :min_age, :max_age, :image, :description, :barcode
    )
  end
end
