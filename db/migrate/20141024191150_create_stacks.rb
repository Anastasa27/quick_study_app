class CreateStacks < ActiveRecord::Migration
  def change
    create_table :stacks do |t|
      t.string :category
      t.references :user_id, index: true

      t.timestamps
    end
  end
end
