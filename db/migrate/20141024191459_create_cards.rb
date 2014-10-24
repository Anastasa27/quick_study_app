class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer
      t.references :stack_id, index: true

      t.timestamps
    end
  end
end
