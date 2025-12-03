Movie Explorer

Simple React + TypeScript application to search for movies and series using the OMDb API, view details, manage favorites, and filter/sort results.

How to Run

Install dependencies:

npm install


Start development:

npm run dev

//////////////////////////////////////////////////////////////////////////////
API Used

OMDb API for all movie and series data.

Endpoints used:

Search:
?s=QUERY&page=1

Details:
?i=ID&plot=full
///////////////////////////////////////////////////////////////////////////////
Notes & Limitations

Uses Context API for global state management.

Favorites are stored in localStorage.

Free OMDb API key has request limits.

Some movies may return incomplete information (Poster, Plot, etc.).

Requires internet connection for API calls.

Optional Features Included

Favorites system

Filtering (All / Movie / Series)

Sorting (A → Z / Year)

Pagination

Movie details page

Responsive UI using TailwindCSS