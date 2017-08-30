import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const AwaitAuth = () => {
  const style = {
    padding: 30,
    height: 135,
    width: '40%',
    minWidth: 500,
    position: 'fixed',
    top: '20%',
    left: '30%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
  };

  return (
    <main>
      <AppBar title="App" />
      <Paper style={style} zDepth={5} >
        <h1>Thank you for registering.</h1>
        <br />
        <h1>Please contact a system administrator to authorize your account</h1>
      </Paper>
    </main>
);
}

export default AwaitAuth;
