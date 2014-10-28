class StacksController < ApplicationController
  before_action :set_stack, only: [:show, :edit, :update, :destroy]

  # GET /stacks
  # GET /stacks.json
  def index
    # binding.pry
    @stacks = Stack.all.sort_by {|stack| stack.created_at}
    # binding.pry
    render json: @stacks

  end

  # GET /stacks/1
  # GET /stacks/1.json
  def show
    render json: @stack
  end

  # GET /stacks/new
  def new
    @stack = Stack.new
  end

  # GET /stacks/1/edit
  def edit
  end

  # POST /stacks
  # POST /stacks.json
  def create
    @stack = Stack.new(stack_params)
    render json: @stack
    # respond_to do |format|
    #   if @stack.save
    #     format.html { redirect_to @stack, notice: 'Stack was successfully created.' }
    #     format.json { render :show, status: :created, location: @stack }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @stack.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /stacks/1
  # PATCH/PUT /stacks/1.json
  def update
    render json: @card
    # respond_to do |format|
    #   if @stack.update(stack_params)
    #     format.html { redirect_to @stack, notice: 'Stack was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @stack }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @stack.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /stacks/1
  # DELETE /stacks/1.json
  def destroy
    @stack.destroy
    head :no_content
    # respond_to do |format|
    #   format.html { redirect_to stacks_url, notice: 'Stack was successfully deleted.' }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stack
      @stack = Stack.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stack_params
      params.require(:stack).permit(:category, :user_id)
    end
end
