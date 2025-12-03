import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieContext } from "../MovieContext";
import MovieCard, { type MovieType } from "../Components/MovieCard";
import { FiArrowLeft } from "react-icons/fi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Results() {
  const navigate = useNavigate();
  const queryParam = useQuery().get("query") || "";
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState<'All' | 'Movie' | 'Series'>('All');
  const [sortType, setSortType] = useState<'year' | 'alpha' | ''>('');

  const context = useContext(MovieContext);
  if (!context) return null;

  const { movies, searchMovies, loading, error, totalResults } = context;
  const totalPages = Math.ceil(totalResults / 10);

  useEffect(() => {
    if (queryParam) searchMovies(queryParam, page, filterType);
  }, [queryParam, page, filterType, searchMovies]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const filteredMovies = movies
    .filter(movie =>
      filterType === 'All' ? true : movie.Type.toLowerCase() === filterType.toLowerCase()
    )
    .sort((a, b) => {
      if (sortType === 'year') return parseInt(b.Year) - parseInt(a.Year);
      if (sortType === 'alpha') return a.Title.localeCompare(b.Title);
      return 0;
    });

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      {/* زر الرجوع للهوم */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        <FiArrowLeft size={20} /> Home
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {queryParam ? `Results for "${queryParam}"` : "Search for a movie or TV show"}
      </h1>

      {/* الفلاتر وأزرار الفرز */}
      {!loading && movies.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {['All', 'Movie', 'Series'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type as 'All' | 'Movie' | 'Series')}
              className={`px-4 py-2 rounded-full font-semibold transition-all 
                 ${filterType === type ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {type}
            </button>
          ))}

          <button
            onClick={() => setSortType('year')}
            className={`px-4 py-2 rounded-full font-semibold transition-all
              ${sortType === 'year' ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Sort by Year
          </button>
          <button
            onClick={() => setSortType('alpha')}
            className={`px-4 py-2 rounded-full font-semibold transition-all
              ${sortType === 'alpha' ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Sort A → Z
          </button>
        </div>
      )}

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <span className="loader"></span>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* نص عند عدم وجود بحث */}
      {!loading && !queryParam && (
        <p className="text-center text-gray-400 mt-10">Search for a movie or TV show to start</p>
      )}

      {/* نص عند عدم وجود نتائج */}
      {!loading && queryParam && filteredMovies.length === 0 && !error && (
        <p className="text-center text-gray-400 mt-10">No matching results found.</p>
      )}

      {/* عرض الأفلام */}
      {!loading && filteredMovies.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredMovies.map((movie: MovieType) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  page === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                &lt;
              </button>

              {page > 1 && (
                <button
                  onClick={() => handlePageChange(page - 1)}
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
                  onClick={() => handlePageChange(page + 1)}
                  className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  {page + 1}
                </button>
              )}

              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  page === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                &gt;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
