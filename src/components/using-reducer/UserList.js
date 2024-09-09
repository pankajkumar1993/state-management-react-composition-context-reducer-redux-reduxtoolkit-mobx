// src/components/UserList.js
import React from "react";

const UserList = ({ state, dispatch }) => {
  const { users, searchQuery, sortBy } = state;

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
        onChange={(e) =>
          dispatch({ type: "SEARCH_USER", payload: e.target.value })
        }
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      />
      <select
        value={sortBy}
        onChange={(e) =>
          dispatch({ type: "SORT_USERS", payload: e.target.value })
        }
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      >
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
        <option value="qualification">Sort by Qualification</option>
      </select>
      <ul className="space-y-2">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
              <span className="font-bold">{user.name}</span> - {user.age} -{" "}
              {user.qualification} -{" "}
              <span
                className={`font-bold ${
                  user.status === "active" ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className="space-x-2">
              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE_STATUS", payload: { id: user.id } })
                }
                className="text-sm text-white bg-blue-500 py-1 px-2 rounded"
              >
                {user.status === "active" ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_USER", payload: { id: user.id } })
                }
                className="text-sm text-white bg-red-500 py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
