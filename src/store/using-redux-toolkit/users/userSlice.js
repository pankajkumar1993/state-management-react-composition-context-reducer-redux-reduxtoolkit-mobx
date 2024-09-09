// src/features/users/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  searchQuery: "",
  sortBy: "name",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ ...action.payload, id: Date.now(), status: "active" });
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    toggleStatus: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.status = user.status === "active" ? "inactive" : "active";
      }
    },
    searchUser: (state, action) => {
      state.searchQuery = action.payload;
    },
    sortUsers: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  addUser,
  updateUser,
  deleteUser,
  toggleStatus,
  searchUser,
  sortUsers,
} = userSlice.actions;

export default userSlice.reducer;
