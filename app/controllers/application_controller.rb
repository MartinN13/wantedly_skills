class ApplicationController < ActionController::Base
  # Disable csrf protection
  protect_from_forgery with: :null_session

  # Authenticate every request
  before_action :authenticate_request
    attr_reader :current_user
    
  private
  
    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: 'Log in to continue' }, status: 401 unless @current_user
    end
end
