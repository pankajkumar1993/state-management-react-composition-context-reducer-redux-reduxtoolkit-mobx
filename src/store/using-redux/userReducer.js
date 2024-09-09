// src/redux/userReducer.js
import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  TOGGLE_STATUS,
  SEARCH_USER,
  SORT_USERS,
} from "./userActions";

const initialState = {
  users: [],
  searchQuery: "",
  sortBy: "name",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: Date.now() }],
      };
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
};

export default userReducer;
