import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component'
import StripeButton from '../../components/stripeButton/stripeButton.component'

import './checkout.styles.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

function Checkout({ checkoutItems, checkoutTotal }) {
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
          checkoutItems ? checkoutItems.map(checkoutItem => <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem}/> ) : ''
        }
      <div className='checkout-total'>
        <span>TOTAL: ${checkoutTotal}</span>
      </div>
      <div className='checkout-warning'>
        <span>*Please use the following test card for payments*</span>
        <br/>
        <span>4242 4242 4242 4242 -- Exp: 09/22 -- CVV: 123</span>
      </div>
        <span className='checkout-button'><StripeButton price={checkoutTotal}/></span>
    </div>
  )
}

const mapStateToProps = state => createStructuredSelector({
  checkoutItems: selectCartItems,
  checkoutTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
