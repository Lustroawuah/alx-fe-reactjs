import React from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Preparation Time:</strong> {recipe.prepTime} minutes</p>
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          </div>
        ))
      ) : (
        <p>No recommendations available. Add some favorites to get personalized recommendations!</p>
      )}
    </div>
  );
};

export default RecommendationsList;