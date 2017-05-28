class Endorsement < ApplicationRecord
  belongs_to :user_skill

  validates :user_id, :user_skills_id, presence: true
end
