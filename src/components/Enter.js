import React from 'react';

class Enter extends React.Component {
	goToRegistration() {
		this.context.router.transitionTo(`/registration`);
	}
	goToLogin() {
		this.context.router.transitionTo(`/login`);
	}
	render(){
		return (
			<div>
				<button type="button" className="reg" onClick={(e) => this.goToRegistration(e)} >Registration</button>
				<p>OR</p>
				<button type="button" className="log" onClick={(e) => this.goToLogin(e)} >Login</button>
			</div>
		)		
	}
}

Enter.contextTypes = {
	router:React.PropTypes.object
}

export default Enter;