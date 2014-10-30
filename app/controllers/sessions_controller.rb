class SessionsController < ApplicationController

  def new
    user = User.create
  end

  def create

# binding.pry
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      log_in(user)
      redirect_to(user_path(user))
    else
      flash[:error] = "Sorry, wrong username or password. Please try again."
      redirect_to(root_path)
    end
  end

  def destroy
    log_out!
  end
end
