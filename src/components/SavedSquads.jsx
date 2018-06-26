import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SavedSquads extends Component {
	render() {
		return (
			<div className="SavedSquads">
				<h2>SavedSquads</h2>
			</div>
		);
	}
}

/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlueButton from './BlueButton';

const blockStyle = {
  width: '280px',
  height: '100%,',
  margin: '0px 20px',
  backgroundColor: '#FDE7BF',
  textAlign: 'center',
  border: '2px solid #587572',
  display: 'flex',
  flexDirection: 'column',
  alignItem: 'left' 
};

const buttonLine = {
  display: 'flex',
  flexDirection: 'row',
  alignItem: 'center',
  justifyContent:'space-around',
  margin: "20px",
}

export default class SquadEditor extends Component {
state = {

}	



	render() {
		return (
			<div style={blockStyle} className="SquadEditor">
				<h2>{this.props.name}</h2>

				<div style={buttonLine}>
					<BlueButton name='Save Squad'/>
					<BlueButton name='Reset Squad'/>
				</div>
			</div>
		);
	}
}
