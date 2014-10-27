class User < ActiveRecord::Base
  has_many :stacks
  has_many :cards, through: :stacks
  has_secure_password
end
