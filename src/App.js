/*eslint-disable */
import React, { Component } from 'react';
import { v4 } from 'uuid';
import CreateHero from './components/CreateHero';
import HeroesList from './components/HeroesList';
import SquadEditor from './components/SquadEditor';
import initialHeroes from './heroesList';

import './App.css';

const mainStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  maxWidth: '100%',
  margin: '0px 0px',
  paddingTop: '20px',
  backgroundColor: '#BF908F',
  border: '1px solid #587572',
};

/*const getVisibleHeroes = (list, item) => {
  console.log(list)
  console.log(item)
   list.filter(hero => {
    console.log(hero.name, item)
    hero.name.includes(item)});
};*/

export default class App extends Component {
  state = {
    heroes: [...initialHeroes],
    selectedHero: [],
    currentSquad: [],
    currentSquadSpeed: 0,
    searchItem: '',
    visibleHeroes: [...initialHeroes],
  };

  getInfo = id => {
    let currentHero = this.state.heroes.filter(x => x.id === id);
    console.log(currentHero);
    currentHero = currentHero[0];
    console.log(currentHero);
    console.log(
      currentHero.id,
      currentHero.name,
      currentHero.strenght,
      currentHero.intelligence,
      currentHero.speed,
    );
  };

  deleteSuperHero = id => {
    this.setState(prevState => ({
      heroes: prevState.heroes.filter(x => x.id !== id),
      visibleHeroes: prevState.heroes.filter(x => x.id !== id),
    }));
  };



  addToSquad = id => {
    const {heroes} = this.state;
    const currentHero = heroes.filter(x => x.id === id);
        
    this.setState(prevState => ({
      selectedHero: currentHero,
      currentSquad: prevState.currentSquad.concat(currentHero),
      
    }));
    
    this.deleteSuperHero(id);
    
    
  };



 getSpeed = () => {
  console.log("getSpeed")

  if(this.state.currentSquad.length > 1){

    console.log("getSpeed > 1")
    console.log(this.state.currentSquad)
    
   this.setState( (x) => ({
      currentSquadSpeed: x.currentSquad.reduce((prev, next) =>{

          console.log(prev.speed, next.speed)
        return prev.speed + next.speed}),
    }))
   console.log(this.state.currentSquadSpeed)


  }else if(this.state.currentSquad.length === 1){
    console.log("getSpeed === 1")

    this.setState( (x) => ({
      currentSquadSpeed: x.currentSquad["0"].speed,
      }))
    
   }else {
    console.log("currentSquad.length is: " + this.state.currentSquad.length)
  }
   
 }





  addNewHero = obj => {
    obj['id'] = v4();
    this.setState(prevState => ({
      heroes: [obj, ...prevState.heroes],
      visibleHeroes: [obj, ...prevState.heroes],
    }));
    console.log('New hero is ', obj);
  };




  handleFilterChange = str => {
    this.setState({ searchItem: str }, this.getVisibleHeroes);
  };




  getVisibleHeroes = (heroes, searchItem) => {
    this.setState({
      visibleHeroes: this.state.heroes.filter(hero =>
        hero.name.toLowerCase().includes(this.state.searchItem.toLowerCase()),
      ),
    });
  };




  render() {
    return (
      <div style={mainStyle} className="App">

        <div className="CreateHero">
          <CreateHero onFormSubmit={this.addNewHero} />
        </div>

        <div className="HeroesList">
          {this.state.heroes.length > 0 ? (
            <HeroesList
              heroes={this.state.visibleHeroes}
              onMoveHero={this.addToSquad}
              onDeleteHero={this.deleteSuperHero}
              onInfoHero={this.getInfo}
              onFilterChange={this.handleFilterChange}
              searchItem={this.state.searchItem}
            />
          ) : (
            <h1>No SuperHeroes yet</h1>
          )}
        </div>

        <div>
          
          <SquadEditor
            name={'SquadEditor'}
            speed = {this.state.currentSquadSpeed}
            action = {this.getSpeed}
            newSquad={this.state.currentSquad}
            
          />
          
        </div>
      </div>
    );
  }
}