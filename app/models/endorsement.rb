class Endorsement < ApplicationRecord
  belongs_to :user_skill

  validates :user_id, :user_skill_id, presence: true
end
