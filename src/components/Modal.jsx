// Modal.jsx

import React from 'react';

const Modal = ({ user, onClose, updateUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUserData = {
      email: event.target.email.value,
    };

    updateUser("/users", user.id, updatedUserData);
    onClose(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" defaultValue={user.email} />
          <button type="submit">Update</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

