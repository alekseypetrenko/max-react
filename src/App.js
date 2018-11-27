import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Alex", age: 30},
      {name: "Ihor", age: 24}
    ],
    showPerson: false
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
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
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return (
              <Person
                clickOnPerson = {()=>this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age} />
            )
          })}
        </div>
      );
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
