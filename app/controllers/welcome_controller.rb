class WelcomeController < ApplicationController
  def index
    if session[:user_id]
      user = User.find_by(id: session[:user_id])
      binding.pry
      redirect_to(user_path(user))

    else
      binding.pry
      redirect_to(user_path)
    end
  end
end
