import { TOGGLE_DRAWER } from '../actions/drawer_actions';


const drawerReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.open ? { open: false } : { open: true };
    default:
      return state;
  }
};

export default drawerReducer;
