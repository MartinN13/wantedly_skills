class Api::V1::UserSkillsController < ApplicationController
  def create
    @user_skill = UserSkill.new(skill_params)
    respond_to do |format|
      format.json do 
        if @user_skill.save
          render json: @user_skill
        else
          render json: { :errors => @user_skill.errors.messages }, :status => 422
        end
      end
    end
    if @skill.save

    else
      # Error
    end
  end

  private

    def skill_params
      params.require(:user).permit(:user_id, :skill_id)
    end
end