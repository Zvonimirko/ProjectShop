import React from 'react'
import './checkoutItem.styles.scss'

function CheckoutItem({ name, imageUrl, quantity, price }) {
  console.log(name)
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <div className='name'>{name}</div>
      <span className='quantity'>
      <div className='arrow' >&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' >&#10095;</div>
    </span>
      <div className='price'>${price}</div>
      <div className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem
