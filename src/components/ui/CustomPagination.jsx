import React from "react";

const CustomPagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbers = [];

  // Determine page numbers to display
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // Always show the first page
      i === totalPages || // Always show the last page
      (i >= currentPage - 1 && i <= currentPage + 1) // Show the current page and its neighbors
    ) {
      pageNumbers.push(i);
    } else if (
      i === currentPage - 2 || // Show ellipsis before the current page's neighbors
      i === currentPage + 2 // Show ellipsis after the current page's neighbors
    ) {
      pageNumbers.push("...");
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className={`px-3 py-2 rounded ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/leftArrow.svg" alt="Previous" className="h-3" />
      </button>

      {pageNumbers.map((number, index) => (
        <button
          key={index}
          className={`px-3 font-semibold py-2 rounded ${
            number === currentPage
              ? "bg-orangeNew text-white"
              : number === "..."
              ? "cursor-default"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => number !== "..." && handlePageChange(number)}
          disabled={number === "..."}
        >
          {number}
        </button>
      ))}

      <button
        className={`px-3 py-2 rounded ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src="/rightArrow.svg" alt="Next" className="h-3" />
      </button>
    </div>
  );
};

export default CustomPagination;
