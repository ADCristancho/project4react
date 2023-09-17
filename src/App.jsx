import React, { useEffect, useState } from 'react';
import FormUser from './components/FormUser';
import useFetch from './hooks/useFetch';
import UserCard from './components/UserCard';
import './App.css'; // Importar app.css

function App() {
  const [infoUpdate, setInfoUpdate] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const baseUrl = 'https://users-crud.academlo.tech';
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl);

  useEffect(() => {
    getUsers('/users');
  }, []);

  const handleCreateUserClick = () => {
    setInfoUpdate(null);
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="container">
      <h1>Users Crud</h1>
      <button className="create-button" onClick={handleCreateUserClick}>
        Create User
      </button>
      {isFormVisible && (
        <div className="form-container">
          <FormUser
            createUser={createUser}
            infoUpdate={infoUpdate}
            updateUser={updateUser}
            setInfoUpdate={setInfoUpdate}
            onClose={handleFormClose}
          />
        </div>
      )}
      <div>
        {users?.map((user) => (
          <div key={user.id} className="user-container">
            <UserCard
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              updateApi={updateUser}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
