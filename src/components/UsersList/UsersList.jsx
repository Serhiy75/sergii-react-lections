import React from 'react';
import UserItem from '../UserItem/UserItem';
import Header from '../Heaaders/Header';

const UsersList = ({ users, title }) => {
  console.log(users);
  return (
    <>
      {title && <Header title={title} />}
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <UserItem {...user} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersList;
