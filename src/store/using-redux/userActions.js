// src/redux/userActions.js

// Action Types
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const SEARCH_USER = "SEARCH_USER";
export const SORT_USERS = "SORT_USERS";

// Action Creators
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  payload: id,
});

export const searchUser = (query) => ({
  type: SEARCH_USER,
  payload: query,
});

export const sortUsers = (criteria) => ({
  type: SORT_USERS,
  payload: criteria,
});
