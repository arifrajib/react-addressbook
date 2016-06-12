import React, { Component } from 'react';
import {
	Button,
	Modal,
	FormGroup,
	ControlLabel,
	FormControl
} from 'react-bootstrap';


class Refactor extends Component {
	constructor (props){
		super (props);
		this.state = { 
			editModal: false,
			name: '',
			number: '',
			index: ''
		};
	}

	render (){
		return (
			<div>
                <Button onClick={()=>this.setState({editModal: true, name: this.props.Contact.Name, number: this.props.Contact.Number, index: this.props.Index})} bsStyle="primary" bsSize="xsmall">Edit</Button>
                <Button onClick={()=>this.props.deleteAddress(this.props.Index)} bsStyle="danger" bsSize="xsmall">Delete</Button>

                <Modal show={this.state.editModal} onHide={()=>this.setState({editModal: false})}>
                	<Modal.Header closeButton>
                		<Modal.Title>Edit Address</Modal.Title>
                	</Modal.Header>
                	<Modal.Body>
                		<form>
                			<FormGroup>
                				<ControlLabel>Name</ControlLabel>
                				<FormControl onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name} type="text" placeholder="Enter Name" />
                				<ControlLabel>Number</ControlLabel>
                				<FormControl onChange={(e)=>this.setState({number: e.target.value})} value={this.state.number} type="text" placeholder="Enter Number" />
                			</FormGroup>
                		</form>
                	</Modal.Body>
                	<Modal.Footer>
                		<Button onClick={()=>this.setState({editModal: false})}>Close</Button>
                		<Button onClick={()=>{this.props.editAddriss({Name: this.state.name, Number: this.state.number, Index: this.state.index});this.setState({editModal: false});}}>Save</Button>
                	</Modal.Footer>
                </Modal>
            </div>
		);
	}
}

export default Refactor;