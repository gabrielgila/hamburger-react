import React, {Component} from 'react';
import classes './App.module.css';
import Persons from '../components/Persons/Persons';


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
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandle}
                        changed={this.nameChangedHandler} />
                </div>
            );
        }

        return (
            <div className="classes.App">
                <Cockpit />
                {persons}
            </div>
        );
    }
}

export default App;
