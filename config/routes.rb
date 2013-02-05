EmberVsAngular::Application.routes.draw do
  resources :users, only: [:index]
  match "/ember"   => "ember#index"
  match "/angular" => "angular#index"
end
