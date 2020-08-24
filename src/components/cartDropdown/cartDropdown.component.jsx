import React from 'react'

import './cartDropdown.styles.scss'

import CustomButton from '../customButton/customButton.component'

function CartDropdown() {

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
