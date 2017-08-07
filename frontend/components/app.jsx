import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionForm from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar_container';
import Drawer from './drawer_container';
import DressList from './dresses/dress_list_container';
import DressPage from './dresses/dress_page_container';
import UserList from './user_list_container';
import DressForm from './dresses/dress_form_container';

const App = () => {
  return (
  <div>
  <header>
    <AuthRoute exact path='/login' component={SessionForm} />
    <AuthRoute exact path='/signup' component={SessionForm} />
    <ProtectedRoute path='/' component={Navbar} />
    <ProtectedRoute path='/' component={Drawer} />
    <ProtectedRoute path='/orders/new' component={OrderForm} />
    <Switch>
      <ProtectedRoute path='/users' component={UserList} />
      <ProtectedRoute exact path='/dresses/new' component={DressForm} />
      <ProtectedRoute path='/dresses/:id' component={DressPage} />
      <ProtectedRoute exact path='/dresses' component={DressList} />
    </Switch>
  </header>
 </div>
 );
};

export default App;
