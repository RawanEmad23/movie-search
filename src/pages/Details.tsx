import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../MovieContext";
import type { MovieDetails } from "../types/movieTypes";

export default function Details() {
  const context = useContext(MovieContext);
  if (!context) throw new Error("MovieContext not provided");

  const { fetchMovieById } = context;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getMovie = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id, fetchMovieById]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <div className="loader border-4 border-t-4 border-gray-300 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );

  if (!movie)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        Movie not found
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">
      <div className="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-1/3">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{movie.Title}</h1>
            <p className="text-gray-300">
              {movie.Year} • {movie.Runtime} • {movie.Genre}
            </p>
            <p className="text-gray-400">{movie.Plot}</p>

           
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-lg font-semibold">{movie.imdbRating}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
