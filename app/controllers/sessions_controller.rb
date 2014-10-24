class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      log_in(user)
      redirect_to(user_path(user))
    else
      flash[:error] = "Sorry, wrong username or password. Please try again."
      redirect_to(login_path)
    end
  end

  def destroy
    log_out!
  end
end
