import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

const handleSearch = (q: string) => {
  if (!q.trim()) return;
  if (q.trim().length < 3) {
    alert("Please enter at least 3 characters for search");
    return;
  }
  navigate(`/search?query=${encodeURIComponent(q.trim())}`);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-500 drop-shadow-lg mb-4">
          Movie Explorer 🎬
        </h1>
        <p className="text-gray-500 mb-8 text-lg md:text-xl leading-relaxed drop-shadow">
          Discover your favorite movies and TV shows. Search, explore, and enjoy your watchlist.
        </p>

        <SearchBar 
          query={query} 
          setQuery={setQuery} 
          onSearch={handleSearch} 
        />

        
        <button
          onClick={() => navigate("/favorites")}
          className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg"
        >
          Go to Favorites ❤️
        </button>
      </div>
    </div>
  );
}
