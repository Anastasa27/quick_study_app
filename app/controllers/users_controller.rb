class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate,            except: [:new, :create]
  before_action :load_user,               except: [:index, :new, :create]
  # before_action :authorize_user_only,     only:   :show
  # before_action :authorize_user_or_admin, except: [:index, :show, :new, :create]
   # GET /users/new
  def new
    @user = User.new
  end
  # GET /users
  # GET /users.json
  # def index
  #   User.all.sort.reverse.reject {|user| user == current_user}
  #   render :show
  # end

  def stack
  end

  # GET /users/1
  # GET /users/1.json
  def show
    # binding.pry
    @user = User.find(params[:id])
    @user.stacks.find(params[:id])

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
      redirect_to user_path(@user)
    else
      render :new
    end
    # user = User.find_by(username: user_params["username"])
    # id = user.id
    # respond_to do |format|
    #   if @user.save
    #     format.html { redirect_to @user, notice: 'User was successfully created.' }
    #     format.json { render :show, status: :created, location: @user }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @user.errors, status: :unprocessable_entity }
    #   end
    # end
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
        # format.html { redirect_to @user, notice: 'User info was successfully updated.' }
        # format.json { render :show, status: :ok, location: @user }
      # else
      #   format.html { render :edit }
      #   format.json { render json: @user.errors, status: :unprocessable_entity }
      # end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    session[:current_user] = nil
    redirect_to root_path
    # respond_to do |format|
    #   format.html { redirect_to users_url, notice: 'User info was successfully deleted' }
    #   format.json { head :no_content }
    # end
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

    # def user_password_params
    #   @user_password_params ||= params.require(:user).permit(
    #     :old_password,
    #     :password,
    #     :password_confirmation
    #   )
    # end

    # def authorize_user_only
    #   unless current_user == @user
    #     redirect_to user_path(current_user)
    #   end
    # end
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :password_digest, :private)
    end
end
