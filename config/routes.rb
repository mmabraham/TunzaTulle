Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :dresses, except: [:new, :edit]
    resources :customers, except: [:new, :edit]
    resources :orders, except: [:new, :edit]
  end
end
