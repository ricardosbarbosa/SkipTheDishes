import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { allIngredientsQuery } from '../graphql'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjitk5fhc2evf0108j1rbwenf' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

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