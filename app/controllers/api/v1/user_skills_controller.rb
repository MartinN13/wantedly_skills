class Api::V1::UserSkillsController < ApplicationController
  def create
    @skill = Skill.find_by(name: user_skill_params[:skill_name])

    if @skill
      @user_skill = UserSkill.new(user_id: user_skill_params[:user_profile_id], 
                                  skill_id: @skill[:id])
      if @user_skill.save
        @user = User.includes(:skills, :user_skills).find(user_skill_params[:user_profile_id])

        if @user
          @skills = @user.skills
          @user_skills = @user.user_skills
  
          render :json => {skills: @skills,
                           userSkills: @user_skills}
        else
          render json: "Couldn't find user", :status => 422
        end
      else
        render json: "Couldn't add skill", :status => 422
      end
    else
      render json: "Couldn't find skill", :status => 422
    end
  end

  def destroy
    @user_skill = UserSkill.find(user_skill_params[:id]).destroy

    if @user_skill.destroyed?
      @endorsement = Endorsement.where(user_skill_id: user_skill_params[:id]).destroy_all
      @user = User.includes(:skills, :user_skills).find(user_skill_params[:user_profile_id])
      
      if @user
        @skills = @user.skills
        @user_skills = @user.user_skills

        render :json => {skills: @skills,
                         userSkills: @user_skills}
      else
        render json: "Couldn't find user", :status => 422
      end
    else
      render json: "Couldn't remove skill", :status => 422
    end
  end

  private

    def user_skill_params
      params.permit(:id, :user_profile_id, :skill_name, :format)
    end
end