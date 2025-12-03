

import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../Components/MovieCard";
import type { MovieType } from "../types/movieTypes";
import { MovieContext } from "../MovieContext";

const FavoritesPage: React.FC = () => {
  const [favIds, setFavIds] = useState<string[]>([]);
  const context = useContext(MovieContext)!;
  const allMovies = context.movies;

  
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
      // eslint-disable-next-line react-hooks/exhaustive-deps
    setFavIds(storedFavs);
  }, []);

  const favMovies: MovieType[] = favIds
    .map(id => allMovies.find(movie => movie.imdbID === id))
    .filter((movie): movie is MovieType => movie !== undefined);

  if (favMovies.length === 0) {
    return <p className="text-center mt-10 text-gray-400">You have no favorite movies yet.</p>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favMovies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
