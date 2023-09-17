import React, { useEffect, useState } from 'react';
import FormUser from './components/FormUser';
import useFetch from './hooks/useFetch';
import UserCard from './components/UserCard';
import './App.css'; 

function App() {
  const [infoUpdate, setInfoUpdate] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const baseUrl = 'https://users-crud.academlo.tech';
  const [infoApi, getApi, postApi, deleteApi, updateApi] = useFetch(baseUrl);


  useEffect(() => {
    getApi('/users');
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
            createUser={postApi}
            infoUpdate={infoUpdate}
            updateUser={updateApi}
            setInfoUpdate={setInfoUpdate}
            onClose={handleFormClose}
          />
        </div>
      )}
      <div>
        {infoApi?.map((user) => (
          <div key={user.id} className="user-container">
            <UserCard
              user={user}
              deleteUser={deleteApi}
              setInfoUpdate={setInfoUpdate}
              updateApi={updateApi}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
