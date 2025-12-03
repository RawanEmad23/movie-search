import React from "react";

interface Props {
  filterType: 'All' | 'Movie' | 'Series';
  setFilterType: (type: 'All' | 'Movie' | 'Series') => void;
  sortType: 'year' | 'alpha' | '';
  setSortType: (sort: 'year' | 'alpha' | '') => void;
}

const FilterSortControls: React.FC<Props> = ({ filterType, setFilterType, sortType, setSortType }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {['All', 'Movie', 'Series'].map(type => (
        <button
          key={type}
          onClick={() => setFilterType(type as 'All' | 'Movie' | 'Series')}
          className={`px-4 py-2 rounded-full font-semibold transition-all 
            ${filterType === type ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          {type}
        </button>
      ))}

      <button
        onClick={() => setSortType('year')}
        className={`px-4 py-2 rounded-full font-semibold transition-all
          ${sortType === 'year' ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
      >
        Sort by Year
      </button>

      <button
        onClick={() => setSortType('alpha')}
        className={`px-4 py-2 rounded-full font-semibold transition-all
          ${sortType === 'alpha' ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
      >
        Sort A → Z
      </button>
    </div>
  );
};

export default FilterSortControls;
