import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDress, deleteDress } from '../../actions/dress_actions';
import DressPage from './dress_page';

const mapStateToProps = (state, {match}) => {
  return {
    dress: state.dresses[match.params.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDress: () => dispatch(fetchDress(ownProps.match.params.id)),
    deleteDress: () => {
      dispatch(deleteDress(ownProps.match.params.id))
        .then(() => ownProps.history.push('/dresses'))
    },
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DressPage)
);
