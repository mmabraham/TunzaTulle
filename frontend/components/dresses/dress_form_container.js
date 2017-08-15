import DressForm from './dress_form';
import { createDress, updateDress, fetchDress } from '../../actions/dress_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    id,
    dress: state.dresses[id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return id ? {
    submit: (dress) => dispatch(updateDress(dress, id)),
    fetchDress: () => dispatch(fetchDress(id)),
  } : {
    submit: (dress) => dispatch(createDress(dress)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DressForm)
)
