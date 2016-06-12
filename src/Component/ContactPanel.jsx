import React, { Component } from 'react';
import Refactor from './Refactor';
import {
	Grid,
	Row,
	Col,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

const style = {
	marginTop: 30
};

class ContactPanel extends Component {
	constructor (props){
		super (props);
	}
	render (){
		return (
			<Grid className="show-grid" style={style}>
			<Row>
        		<Col xs={8} xsOffset={2}>
            		<ListGroup className="MarginTop">
                		<ListGroupItem key="">
                			Rajib
                			<br/>
                			<small>7532</small>
                			<br/>
                			<Refactor Index={1} Contact={7532} />
                		</ListGroupItem>
                	</ListGroup>
            	</Col>
        	</Row>
        	</Grid>
		);
	}
}

export default ContactPanel;