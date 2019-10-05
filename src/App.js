import React, { useState, useEffect } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search.box.component'
import logo from './logo.svg';
import './App.css';
import { fromEventPattern } from 'rxjs';

function App() {
  const [name, setName] = useState({
    monsters: [],
  });
  const [search, setSearch] = useState({
    searchField: ''
  });

  useEffect( ()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setName({monsters:users}))
  }, [])

  const filteredMonsters = name.monsters.filter(monster => 
    monster.name.toLowerCase().includes(search.searchField.toLowerCase())
  )

  const handleChange = (e) => {
    setSearch({searchField: e.target.value})
  }
  
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder="search monsters"
        handleChange={handleChange} 
        />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;