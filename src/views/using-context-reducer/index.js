import React, { useState } from "react";
import UserForm from "../../components/using-context-reducer/UserForm";
import UserList from "../../components/using-context-reducer/UserList";
import { UserProvider } from "../../store/using-context-reducer/UserContext";

function UsersCrudUsingContextReducer() {
  const [editUser, setEditUser] = useState(null);

  const handleEdit = (user) => {
    console.log("Editing user:", user); // Debugging log
    setEditUser(user); // Update the editUser state with the selected user's data
  };

  return (
    <UserProvider>
      <div>
        <h1>User Management System</h1>
        <UserForm editUser={editUser} />
        <UserList onEdit={handleEdit} />
      </div>
    </UserProvider>
  );
}

export default UsersCrudUsingContextReducer;
