// src/components/UserForm.js
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import userStore from "../../store/using-mobx/UserStore";

const UserForm = observer(({ userToEdit = null }) => {
  const [user, setUser] = useState(
    userToEdit || { name: "", age: "", qualification: "", status: "active" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      userStore.updateUser(user);
    } else {
      userStore.addUser(user);
    }
    setUser({ name: "", age: "", qualification: "", status: "active" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4 mb-6"
    >
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
        required
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="text"
        name="qualification"
        value={user.qualification}
        onChange={handleChange}
        placeholder="Qualification"
        required
        className="border border-gray-300 p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded w-full"
      >
        {user.id ? "Update User" : "Add User"}
      </button>
    </form>
  );
});

export default UserForm;
