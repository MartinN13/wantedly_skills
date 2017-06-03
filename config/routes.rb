Rails.application.routes.draw do
  # Root
  root 'sites#index'

  # Site routes
  get 'users', to: 'sites#users'
  get 'users/:id', to: 'sites#index'

  # Authenticate users
  post 'authenticate', to: 'authentication#authenticate'

  # API routes
  namespace :api, format: 'json' do
    namespace :v1  do
      # User resources
      resources :users

      # Add/remove user skills
      post 'user_skills', to: 'user_skills#create'
      delete 'user_skills', to: 'user_skills#destroy'

      # Get profile of current user
      get 'profile', to: 'users#profile'

      # Get info of user by id
      post 'user_info', to: 'users#info'

      # Add/remove endorsements
      post 'endorsements', to: 'endorsements#create'
    end
  end
end
