import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js useEffect');
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('Cockpit.js clean up');
        }
    }, []);

    useEffect(() => {
        console.log('Cockpit.js second use');
        return () => {
            console.log('Cockpit.js secondclean up');
        }
    });

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join('')}>This is working</p>
        <button
            onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default React.memo(Cockpit);
