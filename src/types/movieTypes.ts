export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface MovieDetails extends Movie {
  Plot: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
}

export interface MovieContextProps {
  movies: Movie[];
  searchMovies: (query: string, page?: number, type?: 'All' | 'Movie' | 'Series') => void;
  fetchMovieById: (id: string) => Promise<MovieDetails>;
  loading: boolean;
  error: string;
  totalResults: number;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}
