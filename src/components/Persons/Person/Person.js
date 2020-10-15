import React, { Component } from "react";

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';


class Person extends Component {
    render() {
        return(
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}</p>,
                <p>{this.props.children}</p>,
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
};

export default Person;
