import React, { useState, useEffect } from "react";
import { useUserContext } from "../../store/using-context-reducer/UserContext";

const UserForm = ({ editUser }) => {
  const { addUser, updateUser } = useUserContext();
  const [user, setUser] = useState({
    name: "",
    age: "",
    qualification: "",
    status: "active",
  });

  // Populate form with data when editing a user
  useEffect(() => {
    if (editUser) {
      console.log("Setting user data in form:", editUser); // Debugging log
      setUser(editUser); // Set the user state with the data from editUser
    } else {
      setUser({
        name: "",
        age: "",
        qualification: "",
        status: "active",
      });
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
      addUser({ ...user, id: Date.now() });
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
