import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Drawer from './drawer';
import { toggleDrawer } from '../actions/drawer_actions';

const mapStateToProps = state => {
  return {
    drawerState: state.drawer,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirectTo: (url) => {
      dispatch(toggleDrawer());
      ownProps.history.push(url);
    },
    toggleDrawer: () => dispatch(toggleDrawer()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drawer));
