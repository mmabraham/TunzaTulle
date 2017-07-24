import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { toggleDrawer } from '../actions/drawer_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleDrawer: () => dispatch(toggleDrawer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
