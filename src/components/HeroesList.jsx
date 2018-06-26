/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuperHero from './SuperHero';
import FilterList from './FilterList';

const heroesListStyle = {
	display: 'flex',
	flexDirection:'column',
	alignItem: 'center',
	backgroundColor: '#FDE7BF',
	textAlign:'center',
	marginBottom: '40px', 
}
const noList = {
	listStyleType: 'none',
	margin: '0px',
	padding: '0px'
}
const searchInput = {
	maxWidth: "70%",
	marginLeft: "10px",
	border: "0px solid",
	borderBottom: '2px solid black',
	outline:"none",
	backgroundColor: 'rgba(255, 209, 208, 0.0)',	
}

export default class HeroesList extends Component {

	static propTypes = {
		heroes: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([
				  PropTypes.string,
				  PropTypes.number
				]),
				name: PropTypes.string.isRequired,
				strength: PropTypes.number,
				intelligence: PropTypes.number,
				speed: PropTypes.number,
			}).isRequired,
		).isRequired,
		searchItem: PropTypes.string.isRequired,
   		onFilterChange: PropTypes.func,
	}

	state = {

	};

	handleChange = e => {
		console.log(e.target.value)

    	this.props.onFilterChange(e.target.value);
  	};

	render() {
		
       	return (
		
			<div style ={heroesListStyle}className="HeroesList">
				<h2>Heroes:</h2>

				<input
				style={searchInput}
         		 name="text"
         		 value={this.props.searchItem}
         		 onChange={this.handleChange}
         		 placeholder="Search Hero..."
       			/>
				

				<ul style = {noList}>
					{this.props.heroes.map(hero => (
						<li key={hero.id}>
							<SuperHero {...hero} {...this.props}/>
						</li>
					))}
				</ul>
			</div>
		)
	}
};






