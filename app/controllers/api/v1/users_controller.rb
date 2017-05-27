class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    @user = User.find(params[:id])
    render json: @user.to_json(include: {skills: {only: [:name]}})
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # Successful save
    else
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password,
                                   :password_confirmation)
    end
end

