import { connect } from 'react-redux';
import { asArray, byIds } from '../../reducers/selectors'
import { fetchDresses } from '../../actions/dress_actions';
import DressSelect from './dress_select';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let ids, order_id;
  if (ownProps.edit) {
    order_id = ownProps.match.params.id;
    ids = ownProps.ids || []
  } else {
    ids = ownProps.match.params.id ? [ownProps.match.params.id] : []
  }

  return {
    dresses: asArray(state.dresses),
    selectedDresses: byIds(state.dresses, ids),
    order_id,
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
