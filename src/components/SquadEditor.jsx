/*eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlueButton from './BlueButton';

const blockStyle = {
	width: '320px',
	height: '100%,',
	margin: '0px 20px',
	backgroundColor: '#FDE7BF',
	textAlign: 'center',
	border: '2px solid #587572',
	display: 'flex',
	flexDirection: 'column',
	alignItem: 'left',
};

const buttonLine = {
	display: 'flex',
	flexDirection: 'row',
	alignItem: 'center',
	justifyContent: 'space-around',
	margin: '20px',
};
const noList = {
	listStyleType: 'none',
	margin: '0px',
	padding: '0px',
};
const squadBlock = {
	display: 'flex',
	flexDirection: 'row',
	alignItem: 'center',
	justifyContent: 'space-around',
	margin: '20px',
};

/*this.setState({
      visibleHeroes: this.state.heroes.filter(hero =>
        hero.name.toLowerCase().includes(this.state.searchItem.toLowerCase()),
      ),
    });*/
export default class SquadEditor extends Component {
/*	constructor(props){
		super(props)
			this.state = {
				speed: this.props.speed,
			}
	}*/
	
	
deleteNote = id => {
    this.setState(state => ({
      notes: state.notes.filter(note => note.id !== id),
    }));
  };

	handleTotalSpeed = () =>{ 


		console.log("handleTotalSpeed")
		
		this.props.action()



		
	/*	if(this.props.newSquad.length > 0 ){

			console.log("STATE", this.props.newSquad)
			const arr = this.props.newSquad
			this.setState(state =>({

			speed: arr.reduce((prev, next) =>{
				prev + next.speed;
			})
		}))

		}else{
			console.log("This props lenghth is: " + this.props.newSquad.length)

		}*/		
		
		
		}
		
		


	


	render() {
	


		return (
			<div style={blockStyle} className="SquadEditor">
				<h2>{this.props.name}</h2>

				<div style={buttonLine}>
					{/*<BlueButton name="Save Squad" />*/}

					<button  onClick={this.handleTotalSpeed}>Calculate Total Speed</button>

					{/*<BlueButton name="Reset Squad" />*/}
				</div>
				
				<div style={squadBlock}>
					<div>
						<h4>Heroes</h4>
						<ul style={noList}>
							{this.props.newSquad.map(hero => (
								<li 
								key={hero.id}>
									{hero.name}: {/*S{hero.strength} I{hero.intelligence}*/} Speed: {hero.speed}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4>Stats</h4>
						
						{/*<ul style={noList}>

							
							{<li>
								Strenght: {this.props.newSquad.speed}
							</li>
							<li>
								Intelligence:{' '}
								{this.state.squadStats.totalIntelligence}
							</li>}
							
							{/*{this.props.newSquad.length > 0 ? (
								
									<li>
										{this.props.totalSpeed}
									</li>
								
							) : (
							<li>Stats: Error</li>
							)}

						</ul>*/}
						<p>Speed : {this.props.speed}</p>
					</div>
				</div>
			</div>
		);
	}
}