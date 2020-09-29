import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Is working</h1>
        <button>Switch Name</button>
        <Person name="Max" age="29">My Hobies: Racing</Person>
        <Person name="Stephanie" age="26" />
    </div>
  );
}

export default App;
