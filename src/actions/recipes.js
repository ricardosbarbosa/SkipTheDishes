export const ADD_RECIPE_INGREDIENTS = 'ADD_RECIPE_INGREDIENTS';

export function addRecipeIngredients(recipe) {
  return {
    type: ADD_RECIPE_INGREDIENTS,
    ingredients: recipe.ingredients
  };
};