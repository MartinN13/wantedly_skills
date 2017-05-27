class Api::V1::UserSkillsController < ApplicationController
  def create
    @user_id = User.find_by name: skill_params[:user_name]
    puts 'current user is: '
    puts @current_user[:id]

    @user_skill = UserSkill.new()
    
    respond_to do |format|
      format.json do 
        if @user_skill.save
          render json: @user_skill
        else
          render json: { :errors => @user_skill.errors.messages }, :status => 422
        end
      end
    end
  end

  private

    def skill_params
      params.permit(:format, :user_name, :skill_name)
    end
end