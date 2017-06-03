class SitesController < ApplicationController
  skip_before_action :authenticate_request

  def index
    if params[:id].present?
      render component: 'Profile', props: {url: '/api/v1/users/' + params[:id]}
    else
      render component: 'Login'
    end
  end
  
  def users
    render component: 'Users', props: {url: '/api/v1/users'}
  end
end
