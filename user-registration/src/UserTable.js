import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from './api';

export const UserTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let users = [];
      users = await getUsers();
      setItems(users);
    };
    fetchItems();
  }, []);

  const deleteRow = async (id) => {
    let res = await deleteUser(id);
    let data = items.filter((item) => item._id !== id);
    setItems(data);
  };

  return (
    <div className="container" style={{ overflowX: 'auto' }}>
      <div className="mt-3">
        <h2>Registered Users</h2>
        <table className="table table-bordered table-dark mt-3">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>Sex</th>
              <th>Birthday</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.sex}</td>
                <td>{user.birthday}</td>
                <td>
                  <Link to={`/${user._id}`}>
                    <button class="btn btn-warning">Edit</button>
                  </Link>
                  <button
                    class="btn btn-outline-danger"
                    onClick={() => deleteRow(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
