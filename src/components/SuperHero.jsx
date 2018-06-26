/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SuperHero extends Component {


  state = {
    isInfo: false
  };

  onAddHero = () => {
    this.props.onMoveHero(this.props.id);
  }

  onDeleteSuperhero = () => {
    this.props.onDeleteHero(this.props.id);
  }

  onInfoStart = () => {
    this.props.onInfoHero(this.props.id);
  }



  render() {
    return (
      <div style = {blockStyle}>
        <span style={nameStyle}>{this.props.name}</span>
        
         <button style={butStyle} onClick={this.onAddHero}>Add</button>
         <button style={butStyle} onClick={this.onDeleteSuperhero}>Delete</button>
         <button style={butStyle} onClick={this.onInfoStart}>Info</button>
        
      </div>
    );
  }
}






/* static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    strength: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    onMoveHero: PropTypes.func.isRequired,
    onDeleteHero: PropTypes.func.isRequired,
    onInfoHero: PropTypes.func.isRequired,
  };*/






const blockStyle = {
 width: 'auto',
  margin: '10px 0px',
  backgroundColor: '#FDE7BF',
  textAlign: 'left',
  borderBottom: '2px solid #587572',
 
}
const nameStyle = {
  display: 'inline-block',
  minWidth: '150px',
  maxWidth: '200px',
  height: '20px',
  margin: '10px 10px',
  backgroundColor: '#FDE7BF',
  textAlign: 'left',
  fontSize: '20px',
  fontWeight: 'bold',
  
  overflowWrap: 'break-word',
  /*borderBottom: '1px solid #587572',*/
   
}
const butStyle = {
   margin: '10px 10px',
}