import React from "react";
import { useUserContext } from "../../store/using-context-reducer/UserContext";
import Table from "../ui/table/Table";
import TableHeader from "../ui/table/TableHeader";
import TableBody from "../ui/table/TableBody";
import Input from "../ui/input/Input";

const UserList = ({ onEdit }) => {
  const { state, deleteUser, toggleStatus, sortUsers } = useUserContext();

  const filteredUsers = state.users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        user.qualification
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
    )
    .sort((a, b) => a[state.sortBy].localeCompare(b[state.sortBy]));

  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
    { Header: "Qualification", accessor: "qualification" },
    { Header: "Status", accessor: "status" },
  ];

  const actions = [
    {
      label: "Toggle Status",
      onClick: (id) => toggleStatus(id),
      className: "bg-blue-500 text-white",
      hoverClassName: "bg-blue-600",
    },
    {
      label: "Delete",
      onClick: (id) => deleteUser(id),
      className: "bg-red-500 text-white",
      hoverClassName: "bg-red-600",
    },
    {
      label: "Edit",
      onClick: (user) => {
        console.log("User clicked for edit:", user); // Debugging log
        onEdit(user); // Trigger the onEdit function passed as a prop
      },
      className: "bg-green-500 text-white",
      hoverClassName: "bg-green-600",
    },
  ];

  return (
    <div className="card">
      <div className="flex gap-3">
        <Input
          placeholder={"Search by name or qualification"}
          value={state.searchQuery}
        />
        <select onChange={(e) => sortUsers(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="age">Sort by Age</option>
          <option value="qualification">Sort by Qualification</option>
        </select>
      </div>
      <Table>
        <TableHeader columns={columns} actions={actions} />
        <TableBody data={filteredUsers} columns={columns} actions={actions} />
      </Table>
    </div>
  );
};

export default UserList;
