import React, { useState, useEffect } from 'react';
import { UserForm } from './UserForm';
import { editUser, getUser } from './api';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const EditUser = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(match.params.id);
      setUser(user);
    };
    fetchUser();
  }, []);

  const onSubmit = async (data) => {
    await editUser(match.params.id, data);
    history.push('/');
  };

  return user ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit User</h3>
        <UserForm user={user} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
