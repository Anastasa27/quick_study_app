class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest, null: false
      t.boolean :private, default: false

      t.timestamps
    end
  end
end
