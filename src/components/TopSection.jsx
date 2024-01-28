import React from 'react';
import SearchBar from './SearchBar';

const TopSection = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value); 
  };

  const handleReloadPage = () => {
    window.location.reload(); 
  };

  return (
    <div className='HeaderContainer'>
      <h1 className='element1' onClick={handleReloadPage}>Food Recipes</h1>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={handleChange} onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default TopSection;




