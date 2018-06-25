import * as IngredientsActionTypes from '../actions/ingredients';

export function ingredients(state = [], action) {
  switch (action.type) {
    case IngredientsActionTypes.LOAD_INGREDIENTS: 
      return action.ingredients
    default:
      return state;
  }
}
