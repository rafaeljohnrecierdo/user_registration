import React from 'react';
import { UserForm } from './UserForm';
import { addUser } from './api';
import { useHistory } from 'react-router-dom';

export const AddUser = () => {
  const history = useHistory();
  const onSubmit = async (data) => {
    await addUser(data);
    history.push('/');
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create New User</h3>
        <UserForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
