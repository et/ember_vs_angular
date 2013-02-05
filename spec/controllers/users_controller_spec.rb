require 'spec_helper'

describe UsersController do
  context 'GET #index' do
    it 'should be sucessful' do
      #request.accept = 'application/json'
      get :index
      response.should be_success
    end
  end
end
