
import { client, allRecipesQuery } from '../graphql'

export const LOAD_RECIPES = 'LOAD_RECIPES'
export const ADD_RECIPE_INGREDIENTS = 'ADD_RECIPE_INGREDIENTS';

export function loadRecipes() {
  return dispatch => {

    client.query({
      query: allRecipesQuery,
      fetchPolicy: 'network-only'
    })
    .then(response => {
      response.data && dispatch({ type: LOAD_RECIPES, recipes: response.data.allRecipes })
    })
    .catch(response => {
      console.error("Error")
      console.error(response)
    })

  };
}

export function addRecipeIngredients(recipe) {
  return {
    type: ADD_RECIPE_INGREDIENTS,
    ingredients: recipe.ingredients
  };
};