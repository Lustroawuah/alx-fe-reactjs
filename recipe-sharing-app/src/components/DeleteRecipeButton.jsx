import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onSuccess }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    // Confirm deletion
    const confirmed = window.confirm(
      'Are you sure you want to delete this recipe? This action cannot be undone.'
    );
    
    if (confirmed) {
      deleteRecipe(recipeId);
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="delete-button"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;