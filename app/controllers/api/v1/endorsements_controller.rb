class Api::V1::EndorsementsController < ApplicationController
  def create
    @endorsement = Endorsement.new(user_id: endorsement_params[:user_id], 
                                   user_skill_id: endorsement_params[:user_skill_id])

    if @endorsement.save
      render json: User.find(endorsement_params[:user_profile_id]).endorsements
    else
      render json: {:errors => @endorsement.errors.messages}, :status => 422
    end
  end

  def destroy
    @endorsement = Endorsement.find(endorsement_params[:id]).destroy

    if @endorsement.destroyed?
      render json: User.find(endorsement_params[:user_profile_id]).endorsements
    else
      render json: {:errors => @endorsement.errors.messages}, :status => 422
    end
  end

  private

    def endorsement_params
      params.permit(:id, :user_profile_id, :user_id, :user_skill_id, :format)
    end
end
