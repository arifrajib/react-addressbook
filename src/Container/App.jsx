import React, { Component } from 'react';
import SearchPanel from '../Component/SearchPanel'
import {
	PageHeader
} from 'react-bootstrap';

class App extends Component {
	constructor (props){
		super(props);
		this.state = {showModal: false};
		this.showModal = this.showModal.bind(this);
	}

	render (){
		return (
			<div>
				<PageHeader>
					React AddressBook
				</PageHeader>
				<SearchPanel showModal={this.showModal} />
			</div>
		);
	}

	showModal (){
		this.setState({showModal: true});
	}
}

export default App;