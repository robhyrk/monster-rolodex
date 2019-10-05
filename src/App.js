import React, { useState, useEffect } from 'react';
import {CardList} from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState({
    monsters: []
  });

  useEffect( ()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setName({monsters:users}))
  }, [])
  
  return (
    <div className="App">
      <CardList monsters={name.monsters}/>
    </div>
  );
}

export default App;
