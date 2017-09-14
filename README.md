# TunzaTulle

TunzaTulle is an internal management tool for keeping track of the dress rentals.

## Features
An authorized admin can:

- Authorize, block, or delete any other user accounts.
- List new dresses.
- Search for dresses by availability, age, width, height, color, title, description, or barcode.
- Create and edit orders by selecting dresses and a customer from auto-complete lists.
- Search existing orders by dates or status

Reminder emails are sent to all customers the day after their event after 6:00 am.

## Techical details
- Picture uploads handled by paperclip and stored remotely on AWS for faster load time.
- Custom implementation of back and front end auth using BCrypt and bootstrapping user data.
- Search parameters are persisted within the redux store to allow for multi-filter searches.
- Initiates mailer tasks from an external service to ensure reliable mailing.

## API Endpoints

### HTML API

#### Root

- `GET /` - loads React web app

### JSON API

#### Users

- `POST /api/users`
	- Sign Up
- `GET /api/users`
  - List users to approve
- `Patch /api/users`
  - approve as admin

#### Session

- `POST /api/session`
	- Login
- `DELETE /api/session`
	- Logout

#### Dresses

- `GET /api/dresses`
  - Dresses index/search
  - accepts `date_range` query params to filter by availability
  - accepts `waist` query param to filter by waist fit
  - accepts `height` query param to filter by height
  - accepts `query` param to filter by barcode, color, title, and description
  - accepts `sleeve_length` query param to filter by sleeve_length type
- `POST /api/dresses`
	- Create listing
- `GET /api/dresses/:id`
	- Will include the dress's order dates
- `PATCH /api/dresses/:id`
- `DELETE /api/dresses/:id`

#### Orders

- `GET /api/orders`
	- accepts `customer_id` or `dress_id` query params
	- accepts `phase` and `status` query params
	- includes necessary dress, order and customer info
- `POST /api/orders`
- `PATCH /api/orders/:id`
- `DELETE /api/orders/:id`

#### Customers
- `POST /api/customers`
- `PATCH /api/customers/:id`
- `DELETE /api/customers/:id`

- `GET /api/customers/send_all_reminders`
  - this initiates the reminder mailer to send all due emails


## Database Schema

### users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
admin           | boolean   | not null, default: false

### dresses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bar_code    | string    |
title       | string    | not null
color       | string    | not null
description | text      |
image       | handled by paperclip |
waist             | decimal |      not null
min_waist         | decimal |       not null
max_waist         | decimal |       not null
height            | decimal |       not null
min_height        | decimal |       not null
max_height        | decimal |       not null
age               | integer |       not null
min_age           | integer |       not null
max_age           | integer |       not null
sleeve_length     | string  |        not null

### dress_orders
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
order_id       | integer   | not null, foreign key (references orders), indexed
dress_id       | integer   | not null, foreign key (references dresses), indexed

### orders
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
customer_id    | integer   | not null, foreign key (references users), indexed
event_date     | date      | not null
start_date     | date      | not null
end_date       | date      | not null
status         | string    | not null, default: 'pending'
reminder_sent  | boolean   | default: false


### customers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    |
email           | string    |
phone_number    | string    |
address         | string    |
notes           | text      |


### Todo
- Complete test coverage
