import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { id: 'e', name: 'Max', age: 28 },
                { id: 'f', name: 'Manu', age: 29 },
                { id: 'g', name: 'Stephani', age: 26 }
            ],
            otherState: 'any other value',
            showPersons: false
        }
    }

    nameChangedHandler = (event, id) => {
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
    };

    deletePersonHandle = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow})
    };

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandle(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Is working</h1>
                <button
                    onClick={this.tooglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }
}

export default App;
