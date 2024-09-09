// src/App.js
import React, { useReducer, useState } from "react";
import UserForm from "../../components/using-reducer/UserForm";
import UserList from "../../components/using-reducer/UserList";

const initialState = {
  users: [],
  searchQuery: "",
  sortBy: "name",
};

function userReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users,
          { ...action.payload, id: Date.now(), status: "active" },
        ],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "TOGGLE_STATUS":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload
            ? {
                ...user,
                status: user.status === "active" ? "inactive" : "active",
              }
            : user
        ),
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
}

const UsersCrudUsingReducer = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  const updateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
    setEditUser(null);
  };

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const toggleStatus = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  };

  const handleSearch = (query) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const handleSort = (criteria) => {
    dispatch({ type: "SET_SORT_BY", payload: criteria });
  };

  const filteredUsers = state.users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        user.qualification
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
    )
    .sort((a, b) => a[state.sortBy].localeCompare(b[state.sortBy]));

  return (
    <div>
      <h1>User Management System</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editUser={editUser}
        setEditUser={setEditUser}
      />
      <UserList
        users={filteredUsers}
        deleteUser={deleteUser}
        toggleStatus={toggleStatus}
        searchQuery={state.searchQuery}
        onSearch={handleSearch}
        sortBy={state.sortBy}
        onSort={handleSort}
        setEditUser={setEditUser}
      />
    </div>
  );
};

export default UsersCrudUsingReducer;
