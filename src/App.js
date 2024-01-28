import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
