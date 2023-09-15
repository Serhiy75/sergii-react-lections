import React from 'react';
import UserItem from './UserItem';

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
