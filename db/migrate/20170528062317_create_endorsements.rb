class CreateEndorsements < ActiveRecord::Migration[5.0]
  def change
    create_table :endorsements do |t|
      t.integer :user_id
      t.integer :user_skills_id
      
      t.timestamps
    end
  end
end
