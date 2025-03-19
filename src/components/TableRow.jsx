const TableRow = ({ row, index }) => {
  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } hover:bg-gray-200 transition-all`}
    >
      <td className="border p-3">{row.fileName}</td>
      <td className="border p-3">{row.createdDate}</td>
      <td className="border p-3">{row.createdBy}</td>
      <td className="border p-3">{row.tenantName}</td>
    </tr>
  );
};


export default TableRow;