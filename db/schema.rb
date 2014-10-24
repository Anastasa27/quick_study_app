# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141024191459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: true do |t|
    t.string   "question"
    t.string   "answer"
    t.integer  "stack_id_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cards", ["stack_id_id"], name: "index_cards_on_stack_id_id", using: :btree

  create_table "stacks", force: true do |t|
    t.string   "category"
    t.integer  "user_id_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "stacks", ["user_id_id"], name: "index_stacks_on_user_id_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password"
    t.boolean  "private"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
