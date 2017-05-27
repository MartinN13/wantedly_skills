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
      resources :user_skills
    end
  end
end
