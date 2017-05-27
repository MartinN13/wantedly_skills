class UserSkill < ApplicationRecord
  belongs_to :user
  belongs_to :skill
  validates :user_id, :skill_id, presence: true
end
