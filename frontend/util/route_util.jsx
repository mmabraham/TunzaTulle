import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import AwaitAuth from '../components/session/await_auth';

const Auth = ({component: Component, path, loggedIn, user}) => {
  return (<Route path={path} render={(props) => {
    if (!loggedIn && !user.admin) {
      return ( <Component {...props}/> )
    } else if (loggedIn && user.admin) {
      return ( <Redirect to="/"/> )
    } else {
      return ( <AwaitAuth /> )
    }
  }}/>)
};

const Protected = ({component: Component, path, loggedIn, user}) => {
  return (
    <Route path={path} render={(props) => {
      return (
        loggedIn && user.admin ? (
          <Component {...props}/>
        ) : (
          <Redirect to="/login"/>
        )
      )
    }}/>
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.user),
    user: state.session.user,
  };
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
