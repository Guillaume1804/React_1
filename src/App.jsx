import './App.css';
import React, { useState } from 'react';
import UserCard from './list'
import Button from './btn';

function App() {

  const [users, setUsers] = useState([
    {name: "John", age: 19, profession: "Commercial"},
    {name: "Lili", age: 33, profession: "DRH"},
    {name: "Paul", age: 24, profession: "Réalisateur"},

  ]);


  // TODO : Faire un systéme permettant de mettre à jour un élément de la liste
  const update = (index) => {
    const updateUser = users.filter((_, userIndex) => userIndex ===index);
    console.log(updateUser);
  }

  const deleteTask = (index) => {
    const newUsers = users.filter((_, userIndex) => userIndex !==index);
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <h1>LIste des Utilisateurs</h1>
      <div>
        {users.map( (user, index) => (
          <div key={`div ${index}`}>
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              profession={user.profession}
            />
            <button onClick={() => update(index)}>Update</button>
            <button key={`boutton ${index}`} onClick={() => deleteTask(index)}>Supprimer</button>
          </div>
        ))}
      </div>
      <Button setUsers={setUsers} users={users}/>
    </div>
  );
}

export default App;