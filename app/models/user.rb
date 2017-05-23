class User < ApplicationRecord
  has_many :user_skills
  has_many :skills, through: :user_skills

  validates :name, presence: true
  validates :email, presence: true

  has_secure_password
end
