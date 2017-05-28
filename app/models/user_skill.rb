class UserSkill < ApplicationRecord
  belongs_to :user
  belongs_to :skill

  has_many :endorsements

  validates :user_id, :skill_id, presence: true
  validates :user_id, uniqueness: {:scope => :skill_id}
end
