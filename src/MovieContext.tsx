import React, { createContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import type { Movie, MovieDetails, MovieContextProps } from "./types/movieTypes";

export const MovieContext = createContext<MovieContextProps | null>(null);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const API_KEY = "eb410ed5";

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  const searchMovies = useCallback(
    async (query: string, page: number = 1, type?: 'All' | 'Movie' | 'Series') => {
      setLoading(true);
      setError("");
      try {
        const typeParam = type && type !== 'All' ? `&type=${type.toLowerCase()}` : '';
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}${typeParam}`
        );
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
        } else {
          setMovies([]);
          setTotalResults(0);
          setError(data.Error);
        }
      } catch (err) {
        setMovies([]);
        setTotalResults(0);
        setError("Failed to fetch movies");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [API_KEY]
  );

  const fetchMovieById = useCallback(
    async (id: string): Promise<MovieDetails> => {
      if (!id) throw new Error("No movie ID provided");

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${encodeURIComponent(id)}&plot=full`
      );
      const data = await res.json();

      if (data.Response === "True") {
        return data as MovieDetails;
      } else {
        throw new Error(data.Error || "Failed to fetch movie details");
      }
    },
    [API_KEY]
  );

  useEffect(() => {
    searchMovies("Batman");
  }, [searchMovies]);

  return (
    <MovieContext.Provider value={{ movies, searchMovies, fetchMovieById, loading, error, totalResults }}>
      {children}
    </MovieContext.Provider>
  );
};
