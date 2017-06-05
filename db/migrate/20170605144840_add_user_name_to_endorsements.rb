class AddUserNameToEndorsements < ActiveRecord::Migration[5.0]
  def change
    add_column :endorsements, :name, :string
  end
end
