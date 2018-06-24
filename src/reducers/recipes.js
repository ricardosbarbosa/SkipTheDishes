import { recipes as recipesData } from '../_recipes'

export function recipes(state = recipesData, action) {
  switch (action.type) {
    default:
      return state;
  }
}
