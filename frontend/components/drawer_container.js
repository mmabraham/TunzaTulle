import { connect } from 'react-redux';
import Drawer from './drawer';
import { withRouter } from 'react-router-dom';
import { toggleDrawer } from '../actions/drawer_actions';

const mapStateToProps = state => {
  return {
    drawerState: state.drawer,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect: (path) => {
      dispatch(toggleDrawer());
      ownProps.history.push(path);
    },
    toggleDrawer: () => dispatch(toggleDrawer()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drawer));
