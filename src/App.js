import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component() {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephani', age: 26}
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>Is working</h1>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
            </div>
        );
    }
}

export default App;
