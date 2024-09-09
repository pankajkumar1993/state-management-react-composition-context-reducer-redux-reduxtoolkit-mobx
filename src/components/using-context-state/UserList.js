// src/components/UserList.js
import React from "react";
import { useUserContext } from "../../store/using-context-state/UserContext";

const UserList = () => {
  const {
    users,
    deleteUser,
    toggleStatus,
    searchQuery,
    searchUser,
    sortBy,
    sortUsers,
  } = useUserContext();

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.qualification.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or qualification"
        value={searchQuery}
        onChange={(e) => searchUser(e.target.value)}
      />
      <select onChange={(e) => sortUsers(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
        <option value="qualification">Sort by Qualification</option>
      </select>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.qualification} - {user.status}
            <button onClick={() => toggleStatus(user.id)}>Toggle Status</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
