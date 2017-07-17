Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  get '/' => 'benoit#index', as: :index_benoit
  get '/contact' => 'benoit#contact', as: :contact
  get '/services' => 'benoit#services', as: :services
  get '/telecom' => 'benoit#telecom', as: :telecom
  get '/career' => 'benoit#career', as: :career
  get '/about' => 'benoit#about', as: :about
end
