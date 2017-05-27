class Api::V1::UserSkillsController < ApplicationController
  def create
    if Skill.where(name: skill_params[:skill_name]).exists?
      @skill_id = Skill.where(name: skill_params[:skill_name]).pluck(:id)
      @user_skill = UserSkill.new(user_id: @current_user[:id], skill_id: @skill_id[0])

      if @user_skill.save
        render json: @current_user.skills
      else
        render json: {:errors => @user_skill.errors.messages}, :status => 422
      end
    else
      puts 'No record found'
    end
  end

  private

    def skill_params
      params.permit(:skill_name, :format, :controller, :action)
    end
end