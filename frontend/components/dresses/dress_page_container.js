import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDress } from '../../actions/dress_actions';
import DressPage from './dress_page';

const mapStateToProps = (state, {match}) => {
  debugger
  return {
    dress: state.dresses[match.params.id],
  }
}

const mapDispatchToProps = (dispatch, {match}) => {
  return {
    fetchDress: () => dispatch(fetchDress(match.params.id)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DressPage)
);
