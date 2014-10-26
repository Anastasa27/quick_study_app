class Card < ActiveRecord::Base
  belongs_to :stack
  has_one :user, through: :stack

end
