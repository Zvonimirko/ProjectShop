import React from 'react'
import { connect} from 'react-redux'

import './cartDropdown.styles.scss'

import CustomButton from '../customButton/customButton.component'
import CartItem from '../cartItem/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

function CartDropdown({ cartItems }) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})


export default connect(mapStateToProps)(CartDropdown)
