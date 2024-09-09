import React from "react";
import Table from "../ui/table/Table";
import TableHeader from "../ui/table/TableHeader";
import TableBody from "../ui/table/TableBody";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";

const UserList = ({
  users,
  deleteUser,
  toggleStatus,
  searchQuery,
  onSearch,
  sortBy,
  onSort,
  onEdit, // Destructure onEdit prop
}) => {
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
      onClick: (user) => onEdit(user),
      className: "bg-red-500 text-white",
      hoverClassName: "bg-red-600",
    },
  ];

  return (
    <div className="card">
      <div className="flex gap-3">
        <Input
          placeholder={"Search by name or qualification"}
          value={searchQuery}
          searchUser={onSearch}
        />
        <Select sortBy={sortBy} onSort={onSort} />
      </div>
      <Table>
        <TableHeader columns={columns} actions={actions} />
        <TableBody data={users} columns={columns} actions={actions} />
      </Table>
    </div>
  );
};

export default UserList;
