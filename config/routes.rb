EmberVsAngular::Application.routes.draw do
  match "/ember"   => "ember#index"
  match "/angular" => "angular#index"
end
