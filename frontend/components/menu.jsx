import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { NavLink } from 'react-router-dom';

const Menu = props => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem primaryText="Refresh" onTouchTap={() => window.location.reload()}/>
      <NavLink to="/dresses/new" >
        <MenuItem primaryText="List a new dress" />
      </NavLink>
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onTouchTap={props.logout} />
    </IconMenu>
  )
}

Menu.muiName = 'IconMenu';

export default Menu;
