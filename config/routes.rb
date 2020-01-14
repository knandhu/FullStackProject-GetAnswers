Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :questions do
      resources :answers, only: [:create, :index, :show]
    end
   end
end
