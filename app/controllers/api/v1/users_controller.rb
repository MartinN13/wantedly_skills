class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, :only => [:show]
  
  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    @user = User.includes(:skills).find(params[:id])
    @skills = @user.skills
    @endorsements = Endorsement.where(user_id: params[:id])
    
    render :json => {:user => @user,
                     :skills => @skills,
                     :endorsements => @endorsements}
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

