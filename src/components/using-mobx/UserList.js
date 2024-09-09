import React from "react";
import { observer } from "mobx-react-lite";
import userStore from "../../store/using-mobx/UserStore";

const UserList = observer(() => {
  const handleSearch = (e) => {
    userStore.setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    userStore.setSortBy(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or qualification"
        value={userStore.searchQuery}
        onChange={handleSearch}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      />
      <select
        value={userStore.sortBy}
        onChange={handleSort}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      >
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
        <option value="qualification">Sort by Qualification</option>
      </select>
      <ul className="space-y-2">
        {userStore.filteredUsers.map((user) => (
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
                onClick={() => userStore.toggleStatus(user.id)}
                className="text-sm text-white bg-blue-500 py-1 px-2 rounded"
              >
                {user.status === "active" ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => userStore.deleteUser(user.id)}
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
});

export default UserList;
