import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe!</p>
      ) : (
        recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p className="recipe-snippet">
              {recipe.description.length > 100 
                ? recipe.description.substring(0, 100) + '...' 
                : recipe.description}
            </p>
            <Link to={`/recipe/${recipe.id}`} className="view-recipe-link">
              View Recipe
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;