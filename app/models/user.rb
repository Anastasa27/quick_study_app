class User < ActiveRecord::Base
  has_many :stacks
  has_many :cards, through: :stacks
  validates :username, :password, presence: true
  has_secure_password
end
