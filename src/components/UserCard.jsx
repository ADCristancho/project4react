
import React, { useState } from 'react';
import Modal from "./Modal";
import useFetch from '../hooks/useFetch';

const UserCard = ({ user, deleteUser, setInfoUpdate, baseUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, , , , updateApi] = useFetch(baseUrl); 

  const handleEdit = () => {
    setInfoUpdate(user);
    setIsModalOpen(true); 
  };

  const handleDelete = () => {
    // Llama a la función deleteUser con la ruta y el ID del usuario
    deleteUser("/users", user.id);
    
    // Actualiza la lista de usuarios después de eliminar
    updateApi("/users"); // O utiliza la función que obtiene los usuarios nuevamente
  };

  return (
    <article className='card_users'>
      <button onClick={handleEdit}>Edit User</button>
      <div style={{ color: 'white' }}>
        <h3 style={{ color: 'white' }}>{`#${user.id} ${user.first_name} ${user.last_name}`}</h3>
        <ul>
          <li><span style={{ color: 'white' }}>Email: </span><span>{user.email}</span></li>
          <li><span style={{ color: 'white' }}>Birthday: </span><span>{user.birthday}</span></li>
        </ul>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>

      {isModalOpen && (
        <Modal
          user={user}
          onClose={() => setIsModalOpen(false)}
          updateUser={updateApi} 
        />
      )}
    </article>
  );
};

export default UserCard;
