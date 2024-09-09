import React from "react";

const Select = (props) => {
  return (
    <select value={props.sortBy} onChange={(e) => props.onSort(e.target.value)}>
      <option value="name">Sort by Name</option>
      <option value="age">Sort by Age</option>
      <option value="qualification">Sort by Qualification</option>
    </select>
  );
};

export default Select;
