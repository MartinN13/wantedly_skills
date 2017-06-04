class Api::V1::UserSkillsController < ApplicationController
  def create
    if Skill.where(name: skill_params[:skill_name]).exists? and User.find(skill_params[:user_id]).present?
      @skill_id = Skill.where(name: skill_params[:skill_name]).pluck(:id)
      @user_skill = UserSkill.new(user_id: skill_params[:user_id], skill_id: @skill_id[0])

      if @user_skill.save
        render json: User.find(skill_params[:user_id]).skills
      else
        render json: {:errors => @user_skill.errors.messages}, :status => 422
      end
    else
      render json: { error: 'Skill not found'}, :status => 422
    end
  end

  def destroy
    # Remove skill from user
    if Skill.where(name: skill_params[:skill_name]).exists? and User.find(skill_params[:user_id]).present?
      @skill_id = Skill.where(name: skill_params[:skill_name]).pluck(:id)

      if UserSkill.where(user_id: skill_params[:user_id], skill_id: @skill_id[0]).destroy_all
        render json: User.find(skill_params[:user_id]).skills
      else
        render json: { error: "Couldn't destroy"}, :status => 422
      end
    else
      render json: { error: 'Skill not found'}, :status => 422
    end

    # Remove all endorsements
  end

  private

    def skill_params
      params.permit(:user_id, :skill_name, :format)
    end
end