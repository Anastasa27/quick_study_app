class CreateStacks < ActiveRecord::Migration
  def change
    create_table :stacks do |t|
      t.string :category
      t.references :user


      t.timestamps
    end
  end
end
