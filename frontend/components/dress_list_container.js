import { connect } from 'react-redux';
import { asArray } from '../reducers/selectors'
import { fetchDresses } from '../actions/dress_actions';
import DressList from './dress_list';

const mapStateToProps = state => {
  return {
    dresses: asArray(state.dresses),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDresses: () => dispatch(fetchDresses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DressList)
