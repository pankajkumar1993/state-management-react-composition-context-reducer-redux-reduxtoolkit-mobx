// src/components/UserList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUser,
  toggleStatus,
  searchUser,
  sortUsers,
} from "../../store/using-redux-toolkit/users/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, searchQuery, sortBy } = useSelector((state) => state.users);

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
        onChange={(e) => dispatch(searchUser(e.target.value))}
      />
      <select onChange={(e) => dispatch(sortUsers(e.target.value))}>
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
        <option value="qualification">Sort by Qualification</option>
      </select>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.qualification} - {user.status}
            <button onClick={() => dispatch(toggleStatus(user.id))}>
              Toggle Status
            </button>
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
