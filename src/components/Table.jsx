import React from "react";
import TableRow from "./TableRow";
import "../styles/components.css";

const Table = ({ headers, data, onRowClick }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <TableRow
              key={index}
              data={rowData}
              onClick={() => onRowClick && onRowClick(rowData, index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
