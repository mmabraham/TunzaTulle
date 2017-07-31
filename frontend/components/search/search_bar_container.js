import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { updateFilter, clearFilters } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    filters: state.filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filterType, filter) => dispatch(updateFilter(filterType, filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
