// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <div className="flex justify-center mt-6 space-x-2">
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index}
//           className={`px-4 py-2 rounded-md border transition-all font-medium ${
//             currentPage === index + 1
//               ? "bg-blue-600 text-white shadow-md"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//           onClick={() => onPageChange(index + 1)}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Pagination;

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        className={`px-3 py-1 rounded-full border ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-full border ${
            currentPage === index + 1
              ? "bg-blue-600 text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`px-3 py-1 rounded-full border ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
