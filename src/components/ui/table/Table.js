import React from "react";

const Table = (props) => {
  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
      {props.children}
    </table>
  );
};

export default Table;
