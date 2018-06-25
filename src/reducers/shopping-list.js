import * as IngredientsActionTypes from '../actions/ingredients';
import * as RecipesActionTypes from '../actions/recipes';
import * as ShoppingActionTypes from '../actions/shopping-list';

export function shoppingList(state = [], action) {
  switch (action.type) {
    case IngredientsActionTypes.ADD_INGREDIENT: {
      const { ingredient } = action
      return addOrIncrement(state, ingredient)
    }
    case IngredientsActionTypes.REMOVE_INGREDIENT: {
      const { ingredient } = action
      return state.map(item => {
        if (item.name !== ingredient.name) return item
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }).filter( item => item.quantity > 0)
    }
    case RecipesActionTypes.ADD_RECIPE_INGREDIENTS: 
      for (let item of action.ingredients)  
        state = addOrIncrement(state, item)
      return state
    default:
      return state;
  }
}

export function orderBy(state = "Name", action) {
   switch (action.type) {
    case ShoppingActionTypes.CHANGE_ORDER_BY:
      return state === "Name" ? "Quantity" : "Name"
    default:
      return state;
  }
}


// helpers
function incrementItem(items, ingredient) {
   return items.map( item => {
      if (item.name !== ingredient.name) return item
      return {
        ...item,
        quantity: item.quantity + 1
      }
    })
}

function addItem(items, ingredient) {
  return [
    ...items,
    {
      ...ingredient,
      quantity: 1
    }
  ]
}
function addOrIncrement(items, ingredient) {
  const ingredients = items.map(item => item.name)
  return ingredients.indexOf(ingredient.name) === -1 ? addItem(items, ingredient) : incrementItem(items, ingredient)
}
