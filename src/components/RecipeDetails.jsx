import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopSection2 from './TopSection2';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => setRecipe(result.meals[0]))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="recipe-details-container">
      <TopSection2 />
      <div className="recipe-details-content-wrapper">
        {recipe ? (
          <div className="recipe-details-content">
            <div className="recipe-details-text">
              <h2>{recipe.strMeal}</h2>
              <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
              <h3 className="recipe-ingredients">Ingredients:</h3>
              <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                  const ingredient = recipe[`strIngredient${i}`];
                  const measure = recipe[`strMeasure${i}`];
                  if (ingredient && measure) {
                    return (
                      <li key={i}>
                        {measure} {ingredient}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              <p className="recipe-category"><strong>Category:</strong> {recipe.strCategory}</p>
              <p className="recipe-area"><strong>Area:</strong> {recipe.strArea}</p>
            </div>
            <div className="recipe-details-image">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;
