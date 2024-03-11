import './App.css';
import React from 'react';
import UserCard from './list'
import Button from './btn';

function App() {

  const users = [
    {name: "John", age: 19, profession: "Commercial",},
    {name: "Lili", age: 33, profession: "DRH",},
    {name: "Paul", age: 24, profession: "Réalisateur",},
  ];

  return (
    <div className="App">
      <h1>LIste des Utilisateurs</h1>
      <div>
        {users.map( (user, index) => (
          <UserCard 
            key={index}
            name={user.name} 
            age={user.age} 
            profession={user.profession}
          />
        ))}
      </div>
      <Button/>
    </div>
  );
}

export default App;
