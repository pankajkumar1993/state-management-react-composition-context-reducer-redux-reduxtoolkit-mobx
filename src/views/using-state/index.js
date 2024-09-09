import { useState } from "react";
import UserForm from "../../components/using-state/UserForm";
import UserList from "../../components/using-state/UserList";

function UserState() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now(), status: "active" }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSelectedUser(null); // Clear the selected user after update
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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.qualification.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  const handleEdit = (user) => {
    setSelectedUser(user); // Set the selected user for editing
  };

  return (
    <div className="container">
      <h1>User Management System</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editUser={selectedUser} // Pass the selected user for editing
      />
      <UserList
        users={filteredUsers}
        deleteUser={deleteUser}
        toggleStatus={toggleStatus}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        sortBy={sortBy}
        onSort={handleSort}
        onEdit={handleEdit} // Pass the handleEdit function to UserList
      />
    </div>
  );
}

export default UserState;
