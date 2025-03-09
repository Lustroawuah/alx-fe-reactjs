import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial list of recipes
  searchTerm: '', // Current search term
  filteredRecipes: [], // Filtered list of recipes

  // Action to update the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filtering whenever the search term changes
  },

  // Action to filter recipes based on the search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Optional: Add more filters (e.g., by ingredients or preparation time)
  filterByIngredients: (ingredient) => {
    const { recipes } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.ingredients.some((item) =>
        item.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
    set({ filteredRecipes: filtered });
  },

  filterByPreparationTime: (maxTime) => {
    const { recipes } = get();
    const filtered = recipes.filter((recipe) => recipe.prepTime <= maxTime);
    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;