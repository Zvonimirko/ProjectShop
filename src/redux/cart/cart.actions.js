import cartTypes from './cart.types'

const addItem = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
})

const clearItemFromCart = item => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

const removeItem = item =>({
  type: cartTypes.REMOVE_ITEM,
  payload: item
})

const toggleCartHidden = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN
})

export { addItem, toggleCartHidden, clearItemFromCart, removeItem }