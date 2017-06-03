Rails.application.routes.draw do
  # Root
  root 'site#index'

  # Site routes
  get 'users', to: 'site#users'
  get 'users/:id', to: 'site#index'

  # Authenticate users
  post 'authenticate', to: 'authentication#authenticate'

  # API routes
  namespace :api, format: 'json' do
    namespace :v1  do
      # API routes
      resources :users
      post 'user_skills', to: 'user_skills#create'
      delete 'user_skills', to: 'user_skills#destroy'
      get 'profile', to: 'users#profile'
      post 'user_info', to: 'users#info'
    end
  end
end
