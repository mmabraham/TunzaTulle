import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const DrawerMenu = props => {
  return (
    <Drawer
      open={props.drawerState.open}
      docked={false}
      onRequestChange={props.toggleDrawer}
    >
      <MenuItem onTouchTap={() => props.redirect('./users')} >
        Manage Users
      </MenuItem>
      <MenuItem onTouchTap={() => props.redirect('./dresses')} >
        Manage Dresses
      </MenuItem>
      <MenuItem onTouchTap={() => props.redirect('./orders')} >
        Manage Orders
      </MenuItem>
      <MenuItem onTouchTap={() => props.redirect('./customers')} >
        Manage Customers
      </MenuItem>
    </Drawer>
  )
}

export default DrawerMenu;
