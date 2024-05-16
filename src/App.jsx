import React, { useState, useEffect } from 'react';
import './index.css';
import UserList from './components/UserList'; // Ajusta la ruta de importación según tu estructura de archivos

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
   const data = await response.json();
    setUsers(data);
   
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="container">
      <UserList users={users} />
    </div>
  );
};

export default App;