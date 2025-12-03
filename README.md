# 🎬 Movie Explorer

Movie Explorer is a **React + TypeScript** application to search for movies and TV series using the **OMDb API**.  
Users can view detailed information, manage favorites, filter and sort results, and navigate through pages of results.

---

## 🚀 Features

- Search movies and series by title
- View search results with poster, title, year, and type
- Detailed view for each movie/series (poster, title, year, type, plot)
- **Favorites system** using LocalStorage
- Filter by type: All / Movie / Series
- Sort results alphabetically (A → Z) or by year (newest → oldest)
- Pagination for search results
- Responsive UI with smooth hover effects
- Debounced search (optional)

---

## 🛠 Tech Stack

- **React** (Functional Components + Hooks)
- **TypeScript**
- **TailwindCSS** for styling
- **fetch API is used for HTTP requests** for HTTP requests
- **React Router** for details page navigation
- OMDb API ([https://www.omdbapi.com/](https://www.omdbapi.com/))

---

## ⚡ How to Run

1. Clone the repository:
```bash
git clone https://github.com/RawanEmad23/movie-search
cd movie-explorer


Install dependencies:

npm install


Create a .env file in the root with your OMDb API key:

REACT_APP_OMDB_API_KEY=your_api_key_here


Start the development server:

npm run dev



📡 API Used

OMDb API for all movie and series data.

Search: ?s=QUERY&page=1

Details: ?i=ID&plot=full

⚠️ Notes & Limitations

Uses Context API for global state management

Favorites are stored in localStorage

Free OMDb API key has request limits

Some movies may return incomplete information (Poster, Plot, etc.)

Requires an internet connection for API calls




 Optional Features Implemented

Favorites system

Filtering (All / Movie / Series)

Sorting (A → Z / Year)

Pagination

Movie details page

Responsive UI using TailwindCSS