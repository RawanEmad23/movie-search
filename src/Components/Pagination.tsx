import React from "react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className={`px-3 py-1 rounded-full transition-colors ${
          page === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        &lt;
      </button>

      {page > 1 && (
        <button
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          {page - 1}
        </button>
      )}

      <button className="px-3 py-1 rounded-full bg-blue-600 text-white shadow-lg">
        {page}
      </button>

      {page < totalPages && (
        <button
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          {page + 1}
        </button>
      )}

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className={`px-3 py-1 rounded-full transition-colors ${
          page === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
