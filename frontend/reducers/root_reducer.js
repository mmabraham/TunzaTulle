import session from './session_reducer';
import { combineReducers } from 'redux';
import errors from './errors_reducer';

export default combineReducers({
  session,
  errors,
});
