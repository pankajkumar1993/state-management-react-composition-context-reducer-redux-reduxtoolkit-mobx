// src/components/UserForm.js
import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, editUser, setEditUser }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    qualification: "",
    status: "active",
  });

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    } else {
      setUser({ name: "", age: "", qualification: "", status: "active" });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setEditUser(null);
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
};

export default UserForm;
