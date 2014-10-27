class User < ActiveRecord::Base
  has_many :stacks
  has_many :cards, through: :stacks
  validates :username, :password_digest, presence: true
  has_secure_password
end
