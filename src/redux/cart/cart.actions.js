import cartTypes from './cart.types'

const addItem = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
})

const toggleCartHidden = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN
})

export { addItem, toggleCartHidden }