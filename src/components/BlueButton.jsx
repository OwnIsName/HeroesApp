/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';


const blueBtn = {
	/*backgroundColor: "#2E868A",*/
	/*border: '2px solid black',*/
	display:'block',
}

const BlueButton = ({name, action}) => (

	<button style={blueBtn} onClick={action}>{name}</button>
);
export default BlueButton;
