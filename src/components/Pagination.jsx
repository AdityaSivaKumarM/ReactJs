import React, { useState } from "react";

const PaginationPage = () => {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Paginated List</h1>
      <ul className="mb-4">
        {currentItems.map((item, index) => (
          <li key={index} className="p-1 border-b">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationPage;
