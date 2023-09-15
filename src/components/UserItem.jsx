import React from 'react';

const UserItem = ({ firstName, lastName, email, image, isOnline }) => {
  return (
    <>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
      <img src={image} alt={firstName} />
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
};

export default UserItem;
