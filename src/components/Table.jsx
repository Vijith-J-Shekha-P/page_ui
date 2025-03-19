import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="border p-3 text-left">File Name</th>
            <th className="border p-3 text-left">Created Date</th>
            <th className="border p-3 text-left">Created By</th>
            <th className="border p-3 text-left">Tenant Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index} row={row} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
