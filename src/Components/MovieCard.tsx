


import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import type { MovieType } from "../types/movieTypes";

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const storedFavs: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
     // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsFav(storedFavs.includes(movie.imdbID));
  }, [movie.imdbID]);

  // تحديث المفضلة
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const storedFavs: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavs: string[];

    if (isFav) {
      updatedFavs = storedFavs.filter(id => id !== movie.imdbID);
    } else {
    
      updatedFavs = Array.from(new Set([...storedFavs, movie.imdbID]));
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setIsFav(!isFav);
  };

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="bg-gray-800 text-white rounded overflow-hidden shadow-lg hover:scale-105 transition-transform relative group cursor-pointer"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full h-60 object-cover"
      />

 
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4 pointer-events-none">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p>{movie.Year} - {movie.Type}</p>
        <p className="text-sm mt-2">{movie.Plot || "Short description..."}</p>
      </div>

      <div className="p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{movie.Title}</h2>
          <p>{movie.Year} - {movie.Type}</p>
        </div>

        <button onClick={toggleFavorite} className="z-10">
          <FiHeart size={24} color={isFav ? "red" : "pink"} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
