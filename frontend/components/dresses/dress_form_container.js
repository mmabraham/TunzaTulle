import DressForm from './dress_form';
import { createDress, updateDress } from '../../actions/dress_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  debugger
  return {
    id,
    dress: state.dresses[id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return ownProps.action === 'edit' ? {
    submit: (dress) => dispatch(updateDress(dress)),
  } : {
    submit: (dress) => dispatch(createDress(dress)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DressForm)
