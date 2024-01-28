import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import TopSection from './TopSection';

function Recipes() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchTerm]);

  return (
    <div className='recipesContainer'> 
      <TopSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {data && data.meals ? (
        <div>
          <ul className='recipesUl'>
            {data.meals.map((meal) => (
              <li key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}d</p>
                <div className="button-div">    
                <Link className='viewRecipeBtn' to={`/recipe/${meal.idMeal}`}>View Recipe</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p id='noResults'>No results found.</p>
      )}
    </div>
  );
}

export default Recipes;
