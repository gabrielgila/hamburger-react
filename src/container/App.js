import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import Authcontext from '../context/auth-context';

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
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStatefromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('App js componentDidMount');
    }

    componentDidUpdate() {
        console.log('App.js component didUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('App.js shouldComponent');
        return true;
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });

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

    loginHandler = () => {
        this.setState({authenticated : true});
    };

    render() {
        console.log('App.js render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandle}
                        changed={this.nameChangedHandler}
                        isAuthenticated={this.state.authenticated}/>;
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit:false});
                }}
                >
                    Remove Cockpit
                </button>
                <Authcontext.Provider>
                {this.state.showCockpit ? (
                    <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.tooglePersonsHandler}
                    login={this.loginHandler} />
                    ) : null}
                {persons}
                </Authcontext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
