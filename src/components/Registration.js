import React from 'react';
import {render} from 'react-dom';
import ErrorRegistration from './ErrorRegistration'

class Registration extends React.Component {
	goToLogin() {
		this.context.router.transitionTo(`/login`);
	}
	goToRegistration() {
		this.context.router.transitionTo(`/registration`);
	}
	addInfo(e) {
		e.preventDefault();
		var email = this.email.value;
		var password = this.password.value;
		var conformPassword = this.conformPassword.value;
		if (password !== conformPassword){
			this.goToRegistration();
			render(<ErrorRegistration/>,document.getElementById('error'));
		}
		else {
			localStorage.setItem(email,password);
			this.goToLogin();			
		}
	}
	render(){
		return (
			<div>
				<h1>
					Registration
				</h1>
				<form action="" onSubmit={(e)=>this.addInfo(e)}>
					<input type="text" placeholder="Email" ref={(input) => {this.email = input}}/>
					<input type="text" placeholder="Password" ref={(input) => {this.password = input}}/>
					<input type="text" placeholder="Comfirm Password" ref={(input) => {this.conformPassword = input}}/>				
					<button type="submit" >Registration</button>					
				</form>
				<div id="error"></div>
			</div>
		)		
	}
}

Registration.contextTypes = {
	router:React.PropTypes.object
}

export default Registration;