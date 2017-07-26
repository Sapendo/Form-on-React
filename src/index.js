import React from 'react';
import {render} from 'react-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Enter from './components/Enter';
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Enter}/>
				<Match exactly pattern="/registration" component={Registration}/>
				<Match exactly pattern="/login" component={Login}/>
				<Miss component={NotFound} />		
			</div>
		</BrowserRouter>
	)
}

render (<Root/>, document.getElementById('main'));