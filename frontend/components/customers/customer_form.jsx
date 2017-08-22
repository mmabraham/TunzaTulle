import React from 'react';
// import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchCustomer()
      .then(() => this.setState(this.props.customer))
    }
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit() {
    this.props.processForm(this.state)
      .then(() => this.setState({open: false}));
  }

  render() {
    debugger
    const errors = this.props.errors;
    const actions = [
      (<RaisedButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSubmit}
      />),
      (<RaisedButton
        label="Cancel"
        primary={true}
        onTouchTap={this.toggle}
      />)
    ]

    return (
      <div>
        { this.state.open ? (
          <Dialog zDepth={5}
            title="Add a new customer"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.toggle}
            >
            <TextField
              fullWidth={true}
              floatingLabelText="Name"
              onChange={this.handleChange('name')}
              value={this.state.name}
              errorText={ errors ? errors.name : '' }
              />
            <TextField
              fullWidth={true}
              floatingLabelText="Email"
              onChange={this.handleChange('email')}
              value={this.state.email}
              errorText={ errors ? errors.email : '' }
              />
            <TextField
              fullWidth={true}
              floatingLabelText="Phone Number"
              onChange={this.handleChange('phone_number')}
              value={this.state.phone_number}
              errorText={ errors ? errors.phone_number : '' }
              />
            <TextField
              fullWidth={true}
              floatingLabelText="Address"
              onChange={this.handleChange('address')}
              value={this.state.address}
              errorText={ errors ? errors.address : '' }
              />
            <TextField
              fullWidth={true}
              floatingLabelText="Notes"
              onChange={this.handleChange('notes')}
              value={this.state.notes}
              multiLine={true}
              errorText={ errors ? errors.notes : '' }
              />
          </Dialog>
        ) : (
          <FloatingActionButton onTouchTap={this.toggle}>
            <ContentAdd />
          </FloatingActionButton>
        )}
      </div>
    )
  }
}
