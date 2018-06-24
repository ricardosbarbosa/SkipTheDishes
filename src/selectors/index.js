import { createSelector } from 'reselect'

const getShoppingList = (state) => state.shoppingList
const getOrderBy = (state) => state.orderBy

export const getShoppingCartSorted = createSelector(
  [ getOrderBy, getShoppingList ],
  ( orderBy, shoppingList ) => {
    return shoppingList.sort((a, b) => orderBy === "Name" ? a.name > b.name : a.quantity > b.quantity)
  }
)
