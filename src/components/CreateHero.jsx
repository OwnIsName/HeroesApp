/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const blockStyle = {
  width: '280px',
  height: '260px',
  margin: '0px 20px',
  paddingBottom: "10px", 
  backgroundColor: '#FDE7BF',
  textAlign: 'center',
  border: '2px solid #587572',
  display: 'flex',
  flexDirection: 'column',
  alignItem: 'left' 
}
const formField = {
  maxWidth: '90%',
  height: '20px',
  margin: '20px 10px',
  backgroundColor: '#red',
  display: 'block',
  alignItem: 'left',
  textAlign:'left', 
}
const searchInput = {
    maxWidth: "70%",
    marginLeft: "10px",
    border: "0px solid",
    borderBottom: '2px solid black',
    outline:"none",
    backgroundColor: 'rgba(255, 209, 208, 0.0)', 
    display: 'block',
  alignItem: 'left',
  textAlign:'left',   
}

const INITIAL_STATE = {
		name: '',
		strenght: 0,
		intelligence: 0,
		speed: 0,
	 };


export default class CreateHero extends Component {

	static propTypes = {
    	onFormSubmit: PropTypes.func.isRequired,
  	};

	state = { ...INITIAL_STATE };

 	handleFormChange = e => {
 		if (e.target.name !== 'name'){ 
 			this.setState({ [e.target.name]: Number(e.target.value) })
 		}else{
 		 	this.setState({ [e.target.name]: e.target.value })
 		}
  	};
	
  	handleSubmit = e => {
        console.log(e)
        if(this.state.name.length > 0){
   		    e.preventDefault();
   		    this.props.onFormSubmit(this.state);
    	    this.setState({ ...INITIAL_STATE });
    }else{
        alert('Error! Input field is Empty')
    }

 	 };

	render() {
		return (
			<div style = {blockStyle}className="CreateHero">
				<h2>CreateHero:</h2>
				<form onSubmit={this.handleSubmit}>

     			  <input 
                    style={searchInput}
     			    type="text"
     			    name="name"
     			    placeholder="Enter Hero name"
     			    value={this.state.name}
     			    onChange={this.handleFormChange}
     			  />

     			  <div style={formField}>
     			    <span>Strenght: </span>
     			    <select 
                    
     			    name = 'strenght' 
     			    value = {this.state.strenght}
     			    onChange = {this.handleFormChange}
     			    >
     			    	<option value={0}>0</option>
     			    	<option value={1}>1</option>
     			    	<option value={2}>2</option>
     			    	<option value={3}>3</option>
     			    	<option value={4}>4</option>
     			    	<option value={5}>5</option>
     			    	<option value={6}>6</option>
     			    	<option value={7}>7</option>
     			    	<option value={8}>8</option>
     			    	<option value={9}>9</option>
     			    	<option value={10}>10</option>
     			    </select>
                   </div>

                   <div style={formField}>
     			  <span>Intelligence: </span>
     			  <select
                  name = 'intelligence' 
     			  value = {this.state.intelligence}
     			  onChange = {this.handleFormChange}
     			  >
     			  	<option value={0}>0</option>
     			  	<option value={1}>1</option>
     			  	<option value={2}>2</option>
     			  	<option value={3}>3</option>
     			  	<option value={4}>4</option>
     			  	<option value={5}>5</option>
     			  	<option value={6}>6</option>
     			  	<option value={7}>7</option>
     			  	<option value={8}>8</option>
     			  	<option value={9}>9</option>
     			  	<option value={10}>10</option>     			  	
     			  </select>
                   </div>
                   <div style={formField}>
     			  <span>Speed: </span>
     			  <select 
                  name = 'speed' 
     			  value = {this.state.speed}
     			  onChange = {this.handleFormChange}
     			  >
     			  	<option value={0}>0</option>
     			  	<option value={1}>1</option>
     			  	<option value={2}>2</option>
     			  	<option value={3}>3</option>
     			  	<option value={4}>4</option>
     			  	<option value={5}>5</option>
     			  	<option value={6}>6</option>
     			  	<option value={7}>7</option>
     			  	<option value={8}>8</option>
     			  	<option value={9}>9</option>
     			  	<option value={10}>10</option>
     			  </select>
     			    </div>
     			  <button type="submit">Add Hero</button>
     			</form>

			</div>
		)
	}
};