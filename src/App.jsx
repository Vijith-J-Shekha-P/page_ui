import React, { useState } from "react";
import Button from "./components/Button";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  // Sample data for the table
  const tableHeaders = ["ID", "Name", "Email", "Status", "Actions"];

  const generateData = (count) => {
    const data = [];
    const statuses = ["Active", "Inactive", "Pending"];

    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        actions: "Edit / Delete",
      });
    }

    return data;
  };

  const allData = generateData(25);
  const itemsPerPage = 5;

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  // Get current data for table
  const getCurrentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return allData.slice(start, end);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (rowData) => {
    console.log("Row clicked:", rowData);
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="app-container">
      <header>
        <h1>Custom UI Components</h1>
      </header>

      <section className="button-section">
        <h2>Button Examples</h2>
        <div className="button-container">
          <Button onClick={handleButtonClick}>Primary Button</Button>
          <Button variant="secondary" onClick={handleButtonClick}>
            Secondary Button
          </Button>
          <Button variant="outline" onClick={handleButtonClick}>
            Outline Button
          </Button>
          <Button size="small" onClick={handleButtonClick}>
            Small Button
          </Button>
          <Button size="large" onClick={handleButtonClick}>
            Large Button
          </Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      <section className="table-section">
        <h2>Table Example</h2>
        <Table
          headers={tableHeaders}
          data={getCurrentData()}
          onRowClick={handleRowClick}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
}

export default App;
