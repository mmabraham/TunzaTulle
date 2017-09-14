# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
	- Sign Up
- `GET /api/users`
  - List users to approve
- `Patch /api/users`
  - approve as admin

### Session

- `POST /api/session`
	- Login
- `DELETE /api/session`
	- Logout

### Dresses

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

### Orders

- `GET /api/orders`
	- accepts `customer_id` or `dress_id` query params
	- accepts `phase` and `status` query params
	- includes necessary dress, order and customer info
- `POST /api/orders`
- `PATCH /api/orders/:id`
- `DELETE /api/orders/:id`

### Customers
- `POST /api/customers`
- `PATCH /api/customers/:id`
- `DELETE /api/customers/:id`
