class ChangeEndorsementColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :endorsements, :user_skills_id, :user_skill_id
  end
end
