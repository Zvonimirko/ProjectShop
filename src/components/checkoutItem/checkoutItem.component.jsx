import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions'

import './checkoutItem.styles.scss'

function CheckoutItem({ checkoutItem, clearItem, removeItem, addItem }) {
  const { imageUrl, name, quantity, price } = checkoutItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <div className='name'>{name}</div>
      <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(checkoutItem)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(checkoutItem)} >&#10095;</div>
    </span>
      <div className='price'>${price}</div>
      <div className='remove-button' onClick={() => clearItem(checkoutItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
