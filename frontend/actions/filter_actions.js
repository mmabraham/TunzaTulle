import { fetchDresses } from './dress_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const updateFilter = (filterType, filter) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_FILTER,
    filterType,
    [filterType]: filter,
  });
  fetchDresses(getState().filters)(dispatch);
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
