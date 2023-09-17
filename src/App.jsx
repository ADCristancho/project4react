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
    setInfoUpdate(null); // Limpiar información de actualización
    setIsFormVisible(true); // Mostrar el formulario al hacer clic en "Create User"
  };

  const handleFormClose = () => {
    setIsFormVisible(false); // Ocultar el formulario al cerrar
  };

  return (
    <div>
      <h1>Users Crud</h1>
      <button onClick={handleCreateUserClick}>Create User</button>
      {isFormVisible && (
        <FormUser
          createUser={createUser}
          infoUpdate={infoUpdate}
          updateUser={updateUser}
          setInfoUpdate={setInfoUpdate}
          onClose={handleFormClose}
        />
      )}
      <div>
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            updateApi={updateUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
