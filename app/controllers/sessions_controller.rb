class SessionsController < ApplicationController
  def new

  end

  def create
    user = User.find_by(user_name: params[:user_name])
    if user && user.authenticate(params[:password])
      session[:current_user] = user.id
      redirect_to user_path(user)
    else
      redirect_to sessions_path
    end
  end

  def destroy
    session[:current_user] = nil
    redirect_to sessions_path
  end
end
