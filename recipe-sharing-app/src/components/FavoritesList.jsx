import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Preparation Time:</strong> {recipe.prepTime} minutes</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favorites yet. Add some recipes to your favorites!</p>
      )}
    </div>
  );
};

export default FavoritesList;