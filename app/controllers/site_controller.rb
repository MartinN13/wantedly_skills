class SiteController < ApplicationController
  skip_before_action :authenticate_request

  def profile
    render component: 'Profile', props: {url: '/api/v1/users/2'}
  end
  def users
    render component: 'Users', props: {url: '/api/v1/users'}
  end
end
