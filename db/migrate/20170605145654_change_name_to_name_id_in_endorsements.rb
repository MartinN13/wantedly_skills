class ChangeNameToNameIdInEndorsements < ActiveRecord::Migration[5.0]
  def change
    rename_column :endorsements, :name, :user_name
  end
end
