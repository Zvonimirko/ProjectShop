import { createSelector } from 'reselect'

const selectCart = state => state.cart

const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
  )

const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export { selectCartItems, selectCartItemsCount, selectCartHidden }