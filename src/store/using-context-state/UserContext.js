// src/context/UserContext.js
import React, { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "inactive" : "active",
            }
          : user
      )
    );
  };

  const searchUser = (query) => {
    setSearchQuery(query);
  };

  const sortUsers = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        toggleStatus,
        searchQuery,
        searchUser,
        sortBy,
        sortUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for Using UserContext
export const useUserContext = () => useContext(UserContext);
