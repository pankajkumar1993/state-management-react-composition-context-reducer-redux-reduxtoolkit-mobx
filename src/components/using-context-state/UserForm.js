import React, { useState } from "react";
import { useUserContext } from "../../store/using-context-state/UserContext";

const UserForm = ({ editUser }) => {
  const { addUser, updateUser } = useUserContext();
  const [user, setUser] = useState(
    editUser || { name: "", age: "", qualification: "", status: "active" }
  );

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
