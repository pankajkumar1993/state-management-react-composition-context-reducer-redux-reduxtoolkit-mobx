// src/stores/UserStore.js
import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  searchQuery = "";
  sortBy = "name";

  constructor() {
    makeAutoObservable(this);
  }

  addUser(user) {
    this.users.push({ ...user, id: Date.now(), status: "active" });
  }

  updateUser(updatedUser) {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  toggleStatus(id) {
    this.users = this.users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "active" ? "inactive" : "active" }
        : user
    );
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  setSortBy(criteria) {
    this.sortBy = criteria;
  }

  get filteredUsers() {
    return this.users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.qualification
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      )
      .sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
  }
}

const userStore = new UserStore();
export default userStore;
