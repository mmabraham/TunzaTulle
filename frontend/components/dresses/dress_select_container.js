import { connect } from 'react-redux';
import { asArray, byIds } from '../../reducers/selectors'
import { fetchDresses } from '../../actions/dress_actions';
import DressSelect from './dress_select';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  debugger
  const id = ownProps.match.params.id;
  const preselectedDresses = state.dresses[id] ? [state.dresses[id]] : []
  return {
    dresses: asArray(state.dresses),
    selectedDresses: byIds(state.dresses, ownProps.dress_ids || []).concat(preselectedDresses),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDresses: () => dispatch(fetchDresses()),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DressSelect)
)
