import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.searchUser(e.target.value)}
    />
  );
};

export default Input;
