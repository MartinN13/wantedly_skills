class SiteController < ApplicationController
  skip_before_action :authenticate_request

  def profile
    if params[:id].present?
      if User.exists? id: params[:id]
        render component: 'Profile', props: {url: '/api/v1/users/' + params[:id]}
      else
        render component: 'Login', props: {url: '/authenticate'}
      end
    else
      render component: 'Login', props: {url: '/authenticate'}
    end
  end
  
  def users
    render component: 'Users', props: {url: '/api/v1/users'}
  end
end
