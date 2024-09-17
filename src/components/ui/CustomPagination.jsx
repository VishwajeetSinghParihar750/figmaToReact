import React from 'react';

const CustomPagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className={`px-3 py-2 rounded ${currentPage === 1 && ' cursor-not-allowed' }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/leftArrow.svg" alt="" className='h-3' />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`px-3 font-semibold py-2 rounded ${index + 1 === currentPage ? 'bg-orangeNew text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`px-3 py-2 rounded ${currentPage === totalPages && ' cursor-not-allowed' }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
                <img src="/rightArrow.svg" alt="" className='h-3' />

      </button>
    </div>
  );
};

export default CustomPagination;
