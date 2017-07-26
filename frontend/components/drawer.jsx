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
      <MenuItem onTouchTap={() => props.redirectTo('/users')} >
        Manage Users
      </MenuItem>
      <MenuItem onTouchTap={() => props.redirectTo('/dresses')} >
        Manage Dresses
      </MenuItem>
      <MenuItem onTouchTap={() => props.redirectTo('/orders')} >
        Manage Orders
      </MenuItem>
      <MenuItem onTouchTap={() => props.redirectTo('/customers')} >
        Manage Customers
      </MenuItem>
    </Drawer>
  )
}

export default DrawerMenu;
