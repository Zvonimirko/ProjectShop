import React from 'react'
import { connect } from 'react-redux'

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component'

import './checkout.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors'

function Checkout({ checkoutItems }) {
  return (
    <div className='checkout'>
      <div className='checkout-header'>
        <div className='checkout-header-block'>
          <span>Product</span>
        </div>
        <div className='checkout-header-block'>
          <span>Description</span>
        </div>
        <div className='checkout-header-block'>
          <span>Quantity</span>
        </div>
        <div className='checkout-header-block'>
          <span>Price</span>
        </div>
        <div className='checkout-header-block'>
          <span>Remove</span>
        </div>
      </div>
        {
          checkoutItems ? checkoutItems.map(checkoutItem => <CheckoutItem key={checkoutItem.id} {...checkoutItem}/> ) : ''
        }
      <div className='checkout-total'>
        <span>$TOTAL</span>
      </div>
      <div className='checkout-warning'>Checkout payment</div>
        <span className='checkout-button'>Btn</span>
    </div>
  )
}

const mapStateToProps = state => ({
  checkoutItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Checkout)
