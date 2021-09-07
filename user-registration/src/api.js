export const getUsers = async () => {
  let res = await fetch('http://localhost:3000/');
  res = await res.json();
  return res;
};

export const getUser = async (id) => {
  let res = await fetch(`http://localhost:3000/${id}`);
  res = await res.json();
  return res;
};

export const editUser = async (id, user) => {
  let res = await fetch(`http://localhost:3000/${id}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  res = await res.json();
  return res;
};

export const deleteUser = async (id, user) => {
  let res = await fetch(`http://localhost:3000/${id}`, {
    method: 'DELETE',
  });
  res = await res.json();
  return res;
};

export const addUser = async (user) => {
  let res = await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  res = await res.json();
  return res;
};
