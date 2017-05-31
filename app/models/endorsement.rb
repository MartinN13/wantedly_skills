class Endorsement < ApplicationRecord
  belongs_to :user_skill
  belongs_to :user

  validates :user_id, :user_skill_id, presence: true
end
