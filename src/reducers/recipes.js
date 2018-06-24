import { recipes as recipesData } from '../_recipes'

export function recipes(state = recipesData, action) {
  switch (action.type) {
    // case ActionTypes.LOAD_MY_CLINICAS:
    //   for (const clinica of action.clinicas) {
    //     console.log(clinica);
    //     action.asyncDispatch(subscribeToNewRequestsPut(clinica));
    //   }
    //   return action.clinicas;
    default:
      return state;
  }
}
