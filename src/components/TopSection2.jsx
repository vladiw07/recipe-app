import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const TopSection = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className='HeaderContainer'>
      <h1 className='element1'>
        <Link className='top2' to="/">Food Recipes</Link>
      </h1>
      
    </div>
  );
}

export default TopSection;
