EmberVsAngular::Application.routes.draw do
  root to: 'ember#index'
  match "/*path" => "ember#index"
end
