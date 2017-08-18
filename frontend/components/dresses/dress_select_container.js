import { connect } from 'react-redux';
import { asArray, byIds } from '../../reducers/selectors'
import { fetchDresses } from '../../actions/dress_actions';
import DressSelect from './dress_select';

const mapStateToProps = {state, ownProps} => {
  return {
    dresses: asArray(state.dresses),
    selectedDresses: byIds(state.dresses, ownProps.dress_ids),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDresses: () => dispatch(fetchDresses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DressSelect)
