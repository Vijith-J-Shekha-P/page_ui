import React from "react";
import "../styles/components.css";

const TableRow = ({ data, onClick }) => {
  return (
    <tr className="table-row" onClick={onClick}>
      {Object.values(data).map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};

export default TableRow;
