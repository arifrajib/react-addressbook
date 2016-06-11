import React, { Component } from 'react';
import {
	PageHeader
} from 'react-bootstrap';

class App extends Component {
	constructor (){
		super();
	}
	render (){
		return (
			<div>
				<PageHeader>
					React AddressBook
				</PageHeader>
			</div>
		);
	}
}

export default App;