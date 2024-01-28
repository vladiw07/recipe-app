import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input className='searchInput'
        type="text"
        placeholder="Search Recipe"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;
