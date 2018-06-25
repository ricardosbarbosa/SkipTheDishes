import * as RecipesActionTypes from '../actions/recipes';

export function recipes(state = [], action) {
  switch (action.type) {
    case RecipesActionTypes.LOAD_RECIPES:
      return action.recipes
    default:
      return state;
  }
}
