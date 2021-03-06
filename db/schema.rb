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

ActiveRecord::Schema.define(version: 20170919010543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone_number"
    t.string   "address"
    t.text     "notes"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "dress_orders", force: :cascade do |t|
    t.integer  "order_id",   null: false
    t.integer  "dress_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "dress_orders", ["dress_id"], name: "index_dress_orders_on_dress_id", using: :btree
  add_index "dress_orders", ["order_id"], name: "index_dress_orders_on_order_id", using: :btree

  create_table "dresses", force: :cascade do |t|
    t.string   "barcode"
    t.string   "title",              null: false
    t.string   "color",              null: false
    t.text     "description"
    t.decimal  "waist",              null: false
    t.decimal  "min_waist",          null: false
    t.decimal  "max_waist",          null: false
    t.string   "sleeve_length",      null: false
    t.decimal  "height",             null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.decimal  "min_height",         null: false
    t.decimal  "max_height",         null: false
    t.integer  "age",                null: false
    t.integer  "min_age",            null: false
    t.integer  "max_age",            null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "customer_id",                       null: false
    t.datetime "event_date",                        null: false
    t.datetime "start_date",                        null: false
    t.datetime "end_date",                          null: false
    t.string   "status",        default: "pending", null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.boolean  "reminder_sent", default: false
  end

  add_index "orders", ["customer_id"], name: "index_orders_on_customer_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                        null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "admin",           default: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
