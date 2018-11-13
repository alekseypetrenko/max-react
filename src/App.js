import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Alex", age: 30},
      {name: "Ihor", age: 24}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 8},
        {name: "Ali", age: 3},
        {name: "ANn", age: 4}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 3},
        {name: "Ihor", age: 24}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <button onClick={() => this.switchNameHandler("Alex")}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clickInApp={this.switchNameHandler.bind(this, "Aleee!!!")}
          changed={this.nameChangeHandler}
          >Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "some"));
  }
}

export default App;
