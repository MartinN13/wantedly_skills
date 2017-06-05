class Api::V1::SkillsController < ApplicationController
  def show
    @skills = Skill.all

    if @skills
      render json: @skills.to_json
    else
      render json: "Couldn't load skills", :status => 422
    end
  end

  def create
    @skill = Skill.new(name: skills_params[:name])

    if @skill.save
      render json: "Skill saved", :status => 200
    else
      render json: "Couldn't save skill", :status => 422
    end
  end

  private

    def skills_params
      params.permit(:name ,:format)
    end
end
