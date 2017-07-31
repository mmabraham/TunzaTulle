import { UPDATE_FILTER, CLEAR_FILTERS } from '../actions/filter_actions';

const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
      return {};
    case UPDATE_FILTER:
      return Object.assign(
        {},
        state,
        { [action.filterType]: action[action.filterType] }
      );
    default:
      return state;
  }
};

export default filtersReducer;
