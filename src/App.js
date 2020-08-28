import React, { useState } from 'react';

import './App.css';
import { useEffect } from 'react';
import User from './components/User/User';


function App() {
  const [users, setUser] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data =>setUser(data.results))
  },[])
  const handleAddUser = (friends) => console.log('user added', friends)
  return (
    console.log(users),
    <div className="App">
        <p>user loaded: {users.length}</p>
        <ul>
          {
            users.map(user => <User user={user} key={user.id.name} handleAddUser={handleAddUser}></User>)
          }
        </ul>
    </div>
  )
}

export default App;
