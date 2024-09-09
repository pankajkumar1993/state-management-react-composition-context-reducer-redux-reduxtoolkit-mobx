import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead className="bg-gray-200">
      <tr>
        {columns.map((column) => (
          <th
            key={column.accessor}
            className="px-4 py-2 text-left text-gray-600 font-semibold"
          >
            {column.Header}
          </th>
        ))}
        <th className="px-4 py-2 text-left text-gray-600 font-semibold">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
