import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false }
  }

  render() {
    const style = {
      padding: 30,
      height: 360,
      width: '40%',
      minWidth: 500,
      position: 'fixed',
      top: '20%',
      left: '30%',
      textAlign: 'center',
    };

    return (
      <div>
        { this.state.open ? (
          <Paper style={style} zDepth={5} >
            <form>
              
            </form>
          </Paper>
        ) : (
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        )}
      </div>
    )
  }
}
