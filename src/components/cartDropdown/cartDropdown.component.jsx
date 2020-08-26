import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './cartDropdown.styles.scss'

import CustomButton from '../customButton/customButton.component'
import CartItem from '../cartItem/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

function CartDropdown({ cartItems, history }) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
            : <span className='empty-cart'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown))
