import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import Menu from './menu'

const Navbar = (props) => {
  return (
    <AppBar
      title="Admin"
      iconElementRight={
        props.current_user || true ?
          <Menu />
        :
          <FlatButton onTouchTap={props.logout} label="Login" />
      }
      />
  );
};

export default Navbar;
