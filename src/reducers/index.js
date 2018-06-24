import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import 'font-awesome/css/font-awesome.min.css';

import { ingredients } from './ingredients';
import { recipes } from './recipes';
import { shoppingList, orderBy } from './shopping-list';
import { paymentModal } from './ui';


// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const rootReducer = combineReducers({
  errorMessage, 
  ingredients,
  recipes,
  shoppingList,
  orderBy,
  paymentModal,
  form: formReducer
})

export default rootReducer