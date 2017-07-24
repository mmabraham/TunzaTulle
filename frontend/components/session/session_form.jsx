import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  handleChange(field) {
    return (e) => { this.setState({[field]: e.target.value});
  };

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

		const errors = this.props.errors;
    const buttonText = (this.props.formType === 'login') ? 'Login' : 'Sign Up';
		const altText = this.props.formType === 'login' ? "Still need to be approved?" :  "Have already been approved?";

    return (
			<main>
				<AppBar title="App" />
				<Paper style={style} zDepth={5} >
					<form>
						<TextField
							fullWidth={true}
							floatingLabelText="Username"
							onChange={this.handleChange('username')}
							value={this.state.username}
							errorText={ errors ? errors.username : '' }
							/>
						<TextField
							fullWidth={true}
							floatingLabelText="Password"
							onChange={this.handleChange('password')}
							type='password'
							value={this.state.password}
							errorText={ errors ? errors.password : '' }
							/>
						<RaisedButton label={buttonText} fullWidth={true} primary={true} onTouchTap={this.handleSubmit}/>
						<span>{altText}</span>
						<RaisedButton label={this.props.altForm} secondary={true} onTouchTap={this.props.switchForm}/>
					</form>
				</Paper>
			</main>
  );
  }
}

export default SessionForm;
