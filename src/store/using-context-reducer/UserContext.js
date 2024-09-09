// src/context/UserContext.js
import React, { createContext, useReducer, useContext } from "react";

// Initial State
const initialState = {
  users: [],
  searchQuery: "",
  sortBy: "name",
};

// Action Types
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
const TOGGLE_STATUS = "TOGGLE_STATUS";
const SEARCH_USER = "SEARCH_USER";
const SORT_USERS = "SORT_USERS";

// Reducer Function
function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case TOGGLE_STATUS:
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
    case SEARCH_USER:
      return { ...state, searchQuery: action.payload };
    case SORT_USERS:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}

// Create Context
const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const addUser = (user) => dispatch({ type: ADD_USER, payload: user });
  const updateUser = (user) => dispatch({ type: UPDATE_USER, payload: user });
  const deleteUser = (id) => dispatch({ type: DELETE_USER, payload: id });
  const toggleStatus = (id) => dispatch({ type: TOGGLE_STATUS, payload: id });
  const searchUser = (query) => dispatch({ type: SEARCH_USER, payload: query });
  const sortUsers = (criteria) =>
    dispatch({ type: SORT_USERS, payload: criteria });

  return (
    <UserContext.Provider
      value={{
        state,
        addUser,
        updateUser,
        deleteUser,
        toggleStatus,
        searchUser,
        sortUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for Using UserContext
export const useUserContext = () => useContext(UserContext);
