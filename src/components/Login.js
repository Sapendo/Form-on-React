import React from 'react';
import {render} from 'react-dom';
import ErrorLogin from './ErrorLogin'

class Login extends React.Component {
	
	goToUsers() {
		this.context.router.transitionTo(`/users`);
	}
	
	checkInfo(e) {
		e.preventDefault();
		var email = this.email.value;
		var password = this.password.value;
		if (localStorage.getItem(email) && localStorage.getItem(email) === password){
			this.goToUsers();
		}
		else {
			render(<ErrorLogin/>,document.getElementById('error'));
		}
	}
	render() {		
		return (
			<div>
				<h1>
					Login
				</h1>
				<form action="" onSubmit={(e) => {this.checkInfo(e)}}>
					<input type="text" placeholder="Email" ref={(input) => {this.email = input}} required />
					<input type="text" placeholder="Password" ref={(input) => {this.password = input}} required />		
					<button type="submit">Login</button>
				</form>
				<div id="error"></div>
			</div>
		)
	}
}

Login.contextTypes = {
	router:React.PropTypes.object
}

export default Login;