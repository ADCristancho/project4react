import React, { useState } from 'react';

const Modal = ({ user, onClose, updateUser }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUpdating(true);

    const updatedUserData = {
      email: event.target.email.value, 
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value, 
      birthday: event.target.birthday.value,
    };

    updateUser("/users", user.id, updatedUserData)
      .then(res => {
        setIsUpdating(false);
        onClose(); 
      })
      .catch((error) => {
        // Manejar errores aquí
        setIsUpdating(false);
        console.error("Error al actualizar el usuario:", error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" defaultValue={user.email} />

          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" defaultValue={user.first_name} />

          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" defaultValue={user.last_name} />

          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" defaultValue={user.birthday} />

          <button type="submit" disabled={isUpdating}>
            {isUpdating ? 'Updating...' : 'Update'}
          </button>
        </form>
        <button onClick={onClose} disabled={isUpdating}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
