# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
admin           | boolean   | not null, default: false

## dresses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bar_code    | string    |
title       | string    | not null
color       | string    | not null
description | text      |
image       | handled by paperclip |
waist       | decimal   | not null
min_waist   | decimal   | not null
max_waist   | decimal   | not null
sleeve_length | string  | not null
height      | decimal   | not null

## dress_orders
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
order_id       | integer   | not null, foreign key (references orders), indexed
dress_id       | integer   | not null, foreign key (references dresses), indexed

## orders
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
customer_id    | integer   | not null, foreign key (references users), indexed
event_date     | date      | not null
start_date     | date      | not null
end_date       | date      | not null
status         | string    | not null

## customers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    |
email           | string    |
phone_number    | string    |
address         | string    |
notes           | text      |
