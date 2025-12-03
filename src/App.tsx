import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';
import Details from './pages/Details';
import FavoritesPage from './pages/Favorites';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ResultsPage />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
