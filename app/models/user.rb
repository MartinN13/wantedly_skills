class User < ApplicationRecord
  has_many :user_skills
  has_many :skills, through: :user_skills

  validates :name, :email, :password, :password_confirmation, presence: true

  has_secure_password
end
