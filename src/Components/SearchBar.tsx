
interface Props {
  query: string;
  setQuery: (q: string) => void;
  onSearch: (q: string) => void;
}

export default function SearchBar({ query, setQuery, onSearch }: Props) {
  return (
    <div className="py-8">
      <form
        className="max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim() !== "") onSearch(query);
        }}
      >
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies or TV shows..."
            className="block w-full pl-10 pr-24 py-3 rounded-lg shadow-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />

          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
