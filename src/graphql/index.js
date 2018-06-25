// import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjitk5fhc2evf0108j1rbwenf' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

export const allIngredientsQuery = gql`
  query {
    allIngredients(orderBy: name_ASC) {
      id
      name
    }
  }`

export const allRecipesQuery = gql`
  query {
    allRecipes(orderBy: name_ASC) {
      id
      name
      ingredients {
        id
        name
      }
    }
  }`


export const deckByIdQuery = gql`
  query deckByIdQuery($id: ID!){
    
    allDecks(filter: {id: $id}) {
      id
      owner {
        id
      }
      _questionsMeta {
        count
      }
      questions {
        id
        question
        answer
      }
      title
    }
  }`

// createQuestionMutation
// createQuestion(answer:"R. oi", question:"ola?", deckId:"cjbpnkt8kg5ct0117071z0su1"){
//     id
//   }


export const createQuestionMutation = gql`
  mutation createDeckMutation($deck_id: ID!, $questionDescription: String!, $questionAnswer: String!) {
    createQuestion(
      deckId: $deck_id, 
      question: $questionDescription, 
      answer: $questionAnswer, 
    ) {
        id
        deck {
          id
        }
      }
  }`

export const createDeckMutation = gql`
  mutation createDeckMutation($deckTitle: String!) {
    createDeck(
      ownerId: "cjbktezcy07kf0114l61urm6f", 
      title: $deckTitle, 
      questions: []
    ) {
        id
        title
        _questionsMeta {
          count
        }
      }
  }`