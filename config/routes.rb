Rails.application.routes.draw do
  # Authenticate user
  post 'authenticate', to:'authentication#authenticate'
  
  # Root
  root 'site#index'

  # API routes
  namespace :api, format: 'json' do
    namespace :v1  do
      resources :users
    end
  end
end
