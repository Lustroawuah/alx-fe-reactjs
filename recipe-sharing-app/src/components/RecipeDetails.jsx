import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  // Convert recipeId from string to number
  const id = parseInt(recipeId);
  
  // Get the recipe from the store
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === id)
  );
  
  // Handle when recipe is not found
  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Recipes
        </button>
      </div>
    );
  }
  
  return (
    <div className="recipe-details">
      {isEditing ? (
        <EditRecipeForm 
          recipe={recipe} 
          onCancel={() => setIsEditing(false)} 
          onSuccess={() => setIsEditing(false)}
        />
      ) : (
        <>
          <button onClick={() => navigate('/')} className="back-button">
            &larr; Back to Recipes
          </button>
          
          <h1>{recipe.title}</h1>
          <div className="recipe-description">
            <p>{recipe.description}</p>
          </div>
          
          <div className="recipe-actions">
            <button 
              onClick={() => setIsEditing(true)} 
              className="edit-button"
            >
              Edit Recipe
            </button>
            <DeleteRecipeButton 
              recipeId={recipe.id} 
              onSuccess={() => navigate('/')}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;