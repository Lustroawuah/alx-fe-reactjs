import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './components/recipeStore';
import SearchBar from './components/SearchBar';
import FavoriteList from './components/FavoritesList';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  // Initialize with sample recipes
  useEffect(() => {
    const initialRecipes = [
      {
        id: 1,
        title: 'Classic Spaghetti Carbonara',
        description: 'A creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper. Heat 1 tablespoon of olive oil in a large pan over medium heat. Add the diced pancetta and cook until crispy. In a bowl, whisk together 3 eggs and 1 cup of grated Pecorino Romano cheese. Cook 1 pound of spaghetti according to package directions. Drain and immediately add to the pan with pancetta. Remove from heat and quickly stir in the egg and cheese mixture, stirring constantly. Add black pepper to taste.'
      },
      {
        id: 2,
        title: 'Homemade Pizza Dough',
        description: 'Simple and delicious pizza dough recipe that can be topped with your favorite ingredients. In a large bowl, combine 2 cups of all-purpose flour, 1 teaspoon of salt, 3/4 teaspoon of active dry yeast, and 1 teaspoon of olive oil. Gradually add 3/4 cup of warm water and mix until a soft dough forms. Knead for about 5 minutes until smooth. Let rise in a warm place for 1 hour. Roll out, add your favorite toppings, and bake at 475°F for 10-12 minutes.'
      }
    ];
    
    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
          <FavoriteList/>
          <SearchBar/>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <div className="content">
                <AddRecipeForm />
                <RecipeList />
              </div>
            } />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>

        </main>
        
        <footer>
          <p>&copy; 2025 Recipe Sharing App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
