import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	Row,
	Col,
	FormGroup,
	FormControl,
	ControlLabel,
	ButtonToolbar,
	Button
} from 'react-bootstrap';


class SearchPanel extends Component {
	constructor (props){
		super(props);
	}

	render (){
		return (
			<Grid className="show-grid">
			<Row>
				<Col xs={6} xsOffset={3}>
					<FormGroup controlId="formControlsText">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl onChange={e => console.log(e.target.value)} type="text" placeholder="Enter Name for Search" />
                    </FormGroup>
                    <ButtonToolbar>
                        <Button bsStyle="info" onClick={this.props.showModal}>Add New</Button>
                    </ButtonToolbar>
				</Col>
			</Row>
			</Grid>
		);
	}


}

export default SearchPanel;
