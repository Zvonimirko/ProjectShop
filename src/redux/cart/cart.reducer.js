import cartTypes from './cart.types'

const INITIAL_STATE = {
  cartItems: [],
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: action.payload
      }
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default: return state
  }
}

export default cartReducer