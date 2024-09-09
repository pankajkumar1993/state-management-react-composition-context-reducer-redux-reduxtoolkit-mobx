import React from "react";

const TableBody = ({ data, actions, columns }) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className="border-t">
          {columns.map((column) => (
            <td key={column.accessor} className="px-4 py-2">
              {row[column.accessor]}
            </td>
          ))}
          {actions && (
            <td className="px-4 py-2 space-x-2 inline-flex">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => action.onClick(row.id)}
                  className={`${action.className} px-2 py-1 text-nowrap rounded hover:${action.hoverClassName}`}
                >
                  {action.label}
                </button>
              ))}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
