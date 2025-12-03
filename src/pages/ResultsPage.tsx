import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieContext } from "../MovieContext"; 
import MovieCard, { type MovieType } from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import { Loader, ErrorMessage } from "../Components/Loader";
import { FiArrowLeft } from "react-icons/fi";
import FilterSortControls from "../Components/FilterSortControls";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Results() {
  const navigate = useNavigate();
  const queryParam = useQuery().get("query") || "";
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState<'All' | 'Movie' | 'Series'>('All');
  const [sortType, setSortType] = useState<'year' | 'alpha' | ''>('');


const context = useContext(MovieContext)!

  const { movies, searchMovies, loading, error, totalResults } = context;
  const totalPages = Math.ceil(totalResults / 10);

 
  useEffect(() => {
    if (queryParam) searchMovies(queryParam, page, filterType);
  }, [queryParam, page, filterType, searchMovies]);

  const filteredMovies = movies
    .filter(movie => filterType === 'All' ? true : movie.Type.toLowerCase() === filterType.toLowerCase())
    .sort((a, b) => {
      if (sortType === 'year') return parseInt(b.Year) - parseInt(a.Year);
      if (sortType === 'alpha') return a.Title.localeCompare(b.Title);
      return 0;
    });

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <button onClick={() => navigate("/")} className="flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
        <FiArrowLeft size={20} /> Home
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {queryParam ? `Results for "${queryParam}"` : "Search for a movie or TV show"}
      </h1>

      {!loading && movies.length > 0 && (
        <FilterSortControls
          filterType={filterType}
          setFilterType={setFilterType}
          sortType={sortType}
          setSortType={setSortType}
        />
      )}

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !queryParam && <p className="text-center text-gray-400 mt-10">Search for a movie or TV show to start</p>}
      {!loading && queryParam && filteredMovies.length === 0 && !error && <p className="text-center text-gray-400 mt-10">No matching results found.</p>}

      {!loading && filteredMovies.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredMovies.map((movie: MovieType, index) => <MovieCard key={movie.imdbID + index} movie={movie} />)}
          </div>

          {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />}
        </>
      )}
    </div>
  );
}
