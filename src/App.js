import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { id: "asdfffd", name: "Max", age: 28},
      { id: "grfdtgh", name: "Alex", age: 30},
      { id: "rtyhryh", name: "Ihor", age: 24}
    ],
    showPersons: false
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
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); - make a copy of array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
              click = {() => this.deletePersonsHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed={(event) =>this.nameChangeHandler(event, person.id)}
            />
            )
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>React</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "some"));
  }
}

export default App;
