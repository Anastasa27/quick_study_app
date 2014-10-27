class CardsController < ApplicationController
  before_action :set_card, only: [:show, :edit, :update, :destroy]

  # GET /cards
  # GET /cards.json
  def index
    # binding.pry
    @cards = Card.all.sort_by {|task| task.created_at}
    render :index
  end

  # GET /cards/1
  # GET /cards/1.json
  def show
    render json: @card
  end

  # GET /cards/new
  def new
    # @card = Card.new
  end

  # GET /cards/1/edit
  def edit
  end

  # POST /cards
  # POST /cards.json
  def create
    @card = Card.create(card_params)
    render json: @card
    # respond_to do |format|
    #   if @card.save
    #     format.html { redirect_to @card, notice: 'Card was successfully created.' }
    #     format.json { render :show, status: :created, location: @card }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @card.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /cards/1
  # PATCH/PUT /cards/1.json
  def update
    @card.update(card_params)
    render json: @card
    # respond_to do |format|
    #   if @card.update(card_params)
    #     format.html { redirect_to @card, notice: 'Card was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @card }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @card.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /cards/1
  # DELETE /cards/1.json
  def destroy
    @card.destroy
    head :no_content
    # respond_to do |format|
    #   format.html { redirect_to cards_url, notice: 'Card was successfully deleted.' }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card
      @card = Card.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def card_params
      params.require(:card).permit(:question, :answer, :stack_id)
    end
end
