
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


export type MovieType = Movie & {
  Plot?: string;
};

export interface MovieContextProps {
  movies: MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
  searchMovies: (query: string, page?: number, type?: 'All' | 'Movie' | 'Series') => void;
  fetchMovieById: (id: string) => Promise<MovieDetails>;
  loading: boolean;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  totalResults: number;
  setTotalResults: React.Dispatch<React.SetStateAction<number>>;
}


export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}


export type MovieCardProps = {
  movie: MovieType;
};
