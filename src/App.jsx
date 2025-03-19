// src/App.js
import { useState } from "react";
import Button from "./components/Button";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import mockData from "./mockData";

const ITEMS_PER_PAGE = 2;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);

  const paginatedData = mockData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Button />
      </div>
      <Table data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
