import cartTypes from './cart.types'
import { addItemToCart, removeItem } from './cart.utils'

const INITIAL_STATE = {
  cartItems: [],
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case cartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      }
    default: return state
  }
}

export default cartReducer