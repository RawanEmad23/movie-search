import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../Components/MovieCard";
import type { MovieCardProps } from "../types/movieTypes";
import { MovieContext } from "../MovieContext";

const FavoritesPage: React.FC = () => {
  const [favIds, setFavIds] = useState<string[]>([]);
  const {movies} = useContext(MovieContext)!;

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
      // eslint-disable-next-line react-hooks/exhaustive-deps
    setFavIds(storedFavs);
  }, []);

  // Function to remove favorite
  const removeFavorite = (id: string) => {
    const updatedFavs = favIds.filter(favId => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setFavIds(updatedFavs);
  };

 
  const favMovies: MovieCardProps["movie"][] = movies.filter(
    m => favIds.includes(m.imdbID)
  );

  if (favMovies.length === 0) {
    return <p className="text-center mt-10 text-gray-400">You have no favorite movies yet.</p>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favMovies.map(movie => (
          <div key={movie.imdbID} className="relative">
            <MovieCard movie={movie} />
      
            <button
              onClick={() => removeFavorite(movie.imdbID)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
