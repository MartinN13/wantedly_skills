class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    @user = User.includes(:skills, :endorsements).find(params[:id])
    @skills = @user.skills
    @userSkills = @user.user_skills
    @endorsements = @user.endorsements
    
    render :json => {:user => @user,
                     :currentUser => @current_user,
                     :skills => @skills,
                     :userSkills => @userSkills,
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

  def profile
    puts @current_user.inspect
    render json: @current_user.to_json
  end

  private

    def user_params
      params.require(:user).permit(:email, :name, :password,
                                   :password_confirmation)
    end
end

