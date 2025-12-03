

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  Plot?: string;
}

interface DetailsModalProps {
  isModalOpen: boolean;
  selectedMovie: Movie | null;
  onClose: () => void;
}

export default function DetailsModal({ isModalOpen, selectedMovie, onClose }: DetailsModalProps) {
  if (!isModalOpen || !selectedMovie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "/placeholder.png"}
          alt={selectedMovie.Title}
          className="w-full h-80 object-cover rounded mb-4"
        />

        <h2 className="text-2xl font-bold">{selectedMovie.Title}</h2>
        <p className="text-gray-300">{selectedMovie.Year} - {selectedMovie.Type}</p>
        <p className="mt-4 text-gray-200">{selectedMovie.Plot || "No description available."}</p>
      </div>
    </div>
  );
}
