import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import drawer from './drawer_reducer';
import dresses from './dresses_reducer';
import orders from './orders_reducer';
import users from './users_reducer';
import filters from './filters_reducer';

export default combineReducers({
  session,
  errors,
  drawer,
  dresses,
  users,
  filters,
  orders,
});
