import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cartIcon/cartIcon.component'
import CartDropdown from '../cartDropdown/cartDropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

function Header({ currentUser, hidden }) {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'><Logo /></Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        { 
          currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT ({currentUser.displayName})</div> 
          : <Link className='option' to='signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
        {
          hidden ? null : <CartDropdown />
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
})


export default connect(mapStateToProps)(Header)
