Rails.application.routes.draw do
  # Root
  root 'site#profile'

  # Site routes
  get 'users', to: 'site#users'
  get 'users/:id', to: 'site#profile'

  # Authenticate users
  post 'authenticate', to: 'authentication#authenticate'

  # API routes
  namespace :api, format: 'json' do
    namespace :v1  do
      # User API routes
      resources :users
      post 'user_skills', to: 'user_skills#create'
      delete 'user_skills', to: 'user_skills#destroy'
    end
  end
end
