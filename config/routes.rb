Rails.application.routes.draw do
  # Authenticate user
  post 'authenticate', to:'authentication#authenticate'

  namespace :api, format: 'json' do
    namespace :v1  do
      resources :users
    end
  end
end
