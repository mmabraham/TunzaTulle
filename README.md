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

### Todo
- Complete test coverage
