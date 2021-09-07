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
        <h3>Users</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>Sex</th>
              <th>Religion</th>
              <th>Civil Status</th>
              <th>Birthday</th>
              <th>Birthplace</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Father</th>
              <th>Mother</th>
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
                <td>{user.religion}</td>
                <td>{user.civilStatus}</td>
                <td>{user.birthday}</td>
                <td>{user.birthplace}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.father}</td>
                <td>{user.mother}</td>
                <td>
                  <Link to={`/${user._id}`}>
                    <button class="btn btn-primary">Edit</button>
                  </Link>
                  <button
                    class="btn btn-danger"
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
