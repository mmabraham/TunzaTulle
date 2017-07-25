import React from 'react';
import { Route } from 'react-router-dom';
import SessionForm from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar_container';
import Drawer from './drawer_container';
import DressList from './dress_list_container';

const App = () => {
  return (
  <div>
  <header>
    <ProtectedRoute path='/' component={Navbar} />
    <ProtectedRoute path='/' component={Drawer} />
    <ProtectedRoute exact path='/dresses' component={DressList} />
    <ProtectedRoute path='/dresses/:id' component={DressList} />
    <AuthRoute exact path='/login' component={SessionForm} />
    <AuthRoute exact path='/signup' component={SessionForm} />
  </header>
 </div>
 );
};

export default App;
