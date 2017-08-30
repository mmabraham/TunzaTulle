import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionForm from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar_container';
import Drawer from './drawer_container';
import DressList from './dresses/dress_list_container';
import DressPage from './dresses/dress_page_container';
import UserList from './users/user_list_container';
import DressForm from './dresses/dress_form_container';
import OrderForm from './orders/order_form_container';
import OrderList from './orders/order_list_container';
import CustomerList from './customers/customer_list_container';
import CustomerForm from './customers/customer_form_container';
import OrderPage from './orders/order_page_container';

const App = () => {
  return (
  <div>
  <header>
    <AuthRoute exact path='/login' component={SessionForm} />
    <AuthRoute exact path='/signup' component={SessionForm} />
    <ProtectedRoute path='/' component={Navbar} />
    <ProtectedRoute path='/' component={Drawer} />
    <Switch>
      <ProtectedRoute path='/users' component={UserList} />
      <ProtectedRoute path='/dresses/new' component={DressForm} />
      <ProtectedRoute path='/dresses/edit/:id' action='edit'component={DressForm} />
      <ProtectedRoute path='/dresses/:id' component={DressPage} />
      <ProtectedRoute exact path='/dresses' component={DressList} />
      <ProtectedRoute path='/orders/new/:id' component={OrderForm} />
      <ProtectedRoute path='/orders/edit/:id' component={OrderForm} />
      <ProtectedRoute exact path='/orders/:id' component={OrderPage} />
      <ProtectedRoute exact path='/orders' component={OrderList} />
      <ProtectedRoute exact path='/customers' component={CustomerList} />
      <ProtectedRoute path='/customers/edit/:id' component={CustomerForm} />
      <ProtectedRoute exact path='/' component={DressList} />
    </Switch>
  </header>
 </div>
 );
};

export default App;
