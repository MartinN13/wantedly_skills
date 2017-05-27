class Api::V1::UsersController < ApplicationController
  def index
    @user = User.all
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user.to_json(include: {skills: {only: [:name]}})
  end
end
