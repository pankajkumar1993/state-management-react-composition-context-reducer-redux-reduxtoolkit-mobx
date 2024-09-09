import React from "react";
import UserForm from "../../components/using-context-state/UserForm";
import UserList from "../../components/using-context-state/UserList";

function UsersCrudUsingContextState() {
  return (
    <div>
      <h1>User Management System</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default UsersCrudUsingContextState;
