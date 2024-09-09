// src/App.js
import React from "react";
import UserForm from "../../components/using-mobx/UserForm";
import UserList from "../../components/using-mobx/UserList";

function UsersCrudUsingMobx() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        User Management System
      </h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default UsersCrudUsingMobx;
