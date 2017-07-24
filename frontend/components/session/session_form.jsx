import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

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
		  height: 300,
			width: '40%',
		  minWidth: 500,
		  position: 'fixed',
			top: '20%',
			left: '30%',
		  textAlign: 'center',
		};

    const buttonText = (this.props.formType === "login") ? "Login" : "Sign Up";

    return (
			<Paper style={style} zDepth={5} >
				<form onSubmit={this.handleSubmit}>
					<TextField
						fullWidth={true}
						floatingLabelText="Username"
						onChange={this.handleChange('username')}
						value={this.state.username}
						/>
					<br />
					<TextField
						fullWidth={true}
						floatingLabelText="Password"
						onChange={this.handleChange('password')}
						type='password'
						value={this.state.password}
						/>
					<br />
					<RaisedButton label={buttonText} fullWidth={true} primary={true}/>
				</form>
			</Paper>
  );
  }
}

export default SessionForm;
