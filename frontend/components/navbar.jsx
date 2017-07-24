import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from './menu'

const Navbar = (props) => {
  return (
    <AppBar
      title="App"
      iconElementRight={<Menu {...props}/>}
      />
  );
};

export default Navbar;
