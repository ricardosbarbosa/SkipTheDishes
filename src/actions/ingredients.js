
import { client, allIngredientsQuery } from '../graphql'

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS'
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function loadIngredients() {
  return dispatch => {

    client.query({
      query: allIngredientsQuery,
      fetchPolicy: 'network-only'
    })
    .then(response => {
      response.data && dispatch({ type: LOAD_INGREDIENTS, ingredients: response.data.allIngredients })
    })
    .catch(response => {
      console.error("Error")
      console.error(response)
    })

  };
}

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient
  };
};

export function removeIngredient(ingredient) {
  return {
    type: REMOVE_INGREDIENT,
    ingredient
  };
};