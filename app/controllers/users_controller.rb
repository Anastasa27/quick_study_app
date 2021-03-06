class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authenticate,            except: [:new, :create]
  before_action :load_user,               except: [:index, :new, :create]
  # before_action :authorize_user_only,     only:   [:show, :new, :create]
  # before_action :authorize_user_or_admin, except: [:index, :show, :new, :create]
   # GET /users/new
  def new
    @user = User.new
  end

  def index
    # binding.pry
    User.all.sort.reverse.reject {|user| user == current_user}
    render :show
  end

  def create
    # binding.pry
    @user = User.new
  end



  # GET /users/1
  # GET /users/1.json
  def show
      if @user.stacks.count == 0
        redirect_to "/stacks/new"
      else
        @user = User.find(params[:id])
        @user.stacks.find(params[:id])
      end
  end



  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    if@user.save
      @user == User.find_by(username: user_params["username"])
      id = @user.id
      redirect_to user_path(@user)
    else
      render :new
    end

  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find(params[:id])
    # respond_to do |format|
      if @user.update(user_params)
        redirect_to user_path
      else
        render :edit
      end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    session[:current_user] = nil
    redirect_to root_path

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def load_user
      @user = User.find_by(id: params[:id])
      redirect_to root_path if !@user
    end


    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation, :private)
    end
end
