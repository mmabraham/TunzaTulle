import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(ownProps.currentUser),
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const action = formType === "login" ? login : signup;
  const altForm = formType === 'login' ? 'signup' : 'login';

  return {
    processForm: (user) => dispatch(action(user)),
    switchForm: () => {
      ownProps.history.push(`/${altForm}`);
      dispatch(receiveErrors(null));
    },
    formType,
    altForm,
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
