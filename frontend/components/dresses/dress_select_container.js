import { connect } from 'react-redux';
import { asArray, byIds } from '../../reducers/selectors'
import { fetchDresses } from '../../actions/dress_actions';
import DressSelect from './dress_select';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const ids = ownProps.edit ? (ownProps.ids || []) : [ownProps.match.params.id];
  //const preselectedDresses = state.dresses[ids[0]] ? ids.map(id => state.dresses[id]) : []
  debugger
  return {
    dresses: asArray(state.dresses),
    selectedDresses: byIds(state.dresses, ids),//.concat(ids || [])),//.concat(preselectedDresses),
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
