## lite-frame

# lite-frame is a light-weight controller and view web framework modeled after rails. It's API is designed to be intuitive to anyone who has used rails while using only * kb including all it's dependencies.

# implementation


# usage
all application code is written in the app folder

## routes
routes are defined in `app/config/routes.rb`

`routes.draw` is passed a block that has access to methods aliased as the common HTTP methods. To define a route, call the method with 3 arguments.
1- a regex to match against the url.
2- the controller that will handle that route.
3- a symbol representing the controller action.

example:
router.draw do
  get Regexp.new("^/users$"), UsersController, :index
  get Regexp.new("^/users/(?<id>\\d+)$"), UsersController, :show
end

## controllers
controllers are defined in the `app/controllers` directory.

all files within this directory will automatically
