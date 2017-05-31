class User < ApplicationRecord
  has_many :user_skills
  has_many :skills, through: :user_skills
  has_many :endorsements, through: :user_skills

  validates :name, :email, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true

  has_secure_password
end
