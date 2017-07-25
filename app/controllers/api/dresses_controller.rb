class Api::DressesController < ApplicationController
  def index
    @dresses = Dress.all
    render :index
  end

  def show

  end

  def create

  end

  def update

  end

  def destoy

  end

  private

  def dress_params
    params.require(:dress).permit(:title, :color, :waist, :min_waist,
      :max_waist, :sleeve_length, :height)
  end
end
