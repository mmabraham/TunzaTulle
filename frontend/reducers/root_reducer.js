import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import drawer from './drawer_reducer';
import dresses from './dresses_reducer';

export default combineReducers({
  session,
  errors,
  drawer,
  dresses,
});
