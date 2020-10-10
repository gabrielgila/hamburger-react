import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Is working</h1>
            <p className={assignedClasses.join('')}>This is working</p>
        <button
            onClick={this.tooglePersonsHandler}>Switch Name</button>
        </div>
    );
};

export default cockpit;
