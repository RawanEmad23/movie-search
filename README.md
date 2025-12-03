Movie Explorer

Movie Explorer is a React + TypeScript application used to search for movies and TV series using the OMDb API.
Users can view detailed information, manage favorites, filter and sort results, and navigate through pages of results.

🚀 Features

Search movies and TV series by title

View search results with poster, title, year, and type

Detailed page for each movie/series (poster, title, year, type, plot, rating)

Favorites system using LocalStorage

Filtering by type: All / Movie / Series

Sorting: Alphabetical (A → Z) or Year (Newest → Oldest)

Pagination for search results

Responsive UI with smooth interactions

Optional: Debounced search

🎯 How to Use Movie Explorer

Using Movie Explorer is simple and intuitive. Here’s how users interact with the application:

🔍 1. Search for a Movie or Series

Use the search bar .

Type any title, for example: “Batman”.

Press Enter or Click.

Results will appear instantly.

🎞️ 2. Browse Search Results

Each movie/series card displays:

Poster

Title

Year

Type

Smooth hover effects enhance the user experience.

📄 3. View Movie Details

Click on any movie card.

You will be taken to the Details Page, which shows:

Poster

Title

Year & Type

Genre & Runtime

Full Plot

IMDb Rating

❤️ 4. Add Items to Favorites

Every result card includes a heart icon.

Click the heart to add the item to favorites.

Click again to remove it.

Favorites are stored in LocalStorage, so they stay even if the page refreshes.

🎚️ 5. Apply Filters

Use the filter buttons to show:

All

Movies

Series

🔃 6. Sort Results

Sort results by:

A → Z

Year (Newest → Oldest)

📄 7. Pagination

If the results exceed one page:

Navigate using Next, Previous, or page numbers.

📱 8. Works on All Devices

The UI adapts to:

Desktop

Tablet

Mobile

🛠 Tech Stack

React with Hooks

TypeScript

TailwindCSS

fetch API for HTTP requests

React Router for navigation

OMDb API (https://www.omdbapi.com
)

⚡ How to Run
1. Clone the repository
git clone https://github.com/RawanEmad23/movie-search
cd movie-explorer

2. Install dependencies
npm install



4. Start the development server
npm run dev

📡 API Used

OMDb API endpoints:

Search: ?s=QUERY&page=1

Details: ?i=ID&plot=full

⚠️ Notes & Limitations

Uses Context API for state management

Favorites stored in LocalStorage

Free OMDb API key has request limits

Some movies may return missing information

Internet connection required for API requests

🌟 Optional Features Implemented

Favorites system

Filters (All / Movie / Series)

Sorting (A → Z / Year)

Pagination

Movie/Series details page

Responsive UI with TailwindCSS
