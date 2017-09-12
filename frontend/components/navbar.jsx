import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from './menu'

const Navbar = (props) => {
  return (
    <AppBar
      title={<NavLink to="/">TunzaTulle</NavLink>}
      onLeftIconButtonTouchTap={props.toggleDrawer}
      iconElementRight={<Menu {...props}/>}
      />
  );
};

export default Navbar;
