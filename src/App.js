import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Max', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephani', age: 26 }
            ],
            otherState: 'any other value',
            showPersons: false
        }
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephani', age: 27 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephani', age: 27 }
            ]
        })

    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow})
    };

    render() {
        return (
            <div className="App">
                <h1>Is working</h1>
                <button
                    onClick={this.tooglePersonsHandler}>Switch Name</button>

                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age} />
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Max!')}
                                changed={this.nameChangedHandler}>
                                My Hobbies: Racing </Person>
                            <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age} />
                        </div> :

            </div>
        );
    }
}

export default App;
