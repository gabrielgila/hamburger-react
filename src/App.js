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
            ]
        }
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: 'Maximilian', age: 28}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Is working</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} />
            </div>
        );
    }
}

export default App;
