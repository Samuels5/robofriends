import React, {Component} from "react";
import Cardlist from './Cardlist.js';
import Searching from './Searching';
import './App.css';
import Scroll from './Scroll';  


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}))
  }

  onsearch = (event) => {
    this.setState({searchfield : event.target.value})
    console.log(event.target.value)
    
  }

  render() {
    const filtered = this.state.robots.filter( robot =>{return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else{
    return(
      <div className="tc">
        <h1 className="f2">Robofriends</h1>
        <Searching searchchange = {this.onsearch}/>
        <Scroll>
          <Cardlist robots = {filtered} />
        </Scroll>
      </div>
    )};
  }
  
}

export default App