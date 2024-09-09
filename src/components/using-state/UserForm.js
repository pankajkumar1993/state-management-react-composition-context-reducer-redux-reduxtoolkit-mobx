import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, editUser = null }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    qualification: "",
    status: "active",
  });

  // Update form fields when editUser changes
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
    // Reset form after submission
    setUser({ name: "", age: "", qualification: "", status: "active" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="text"
        name="qualification"
        value={user.qualification}
        onChange={handleChange}
        placeholder="Qualification"
        required
      />
      <button type="submit">{user.id ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
