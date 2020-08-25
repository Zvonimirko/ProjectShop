import React from 'react'

import './customButton.styles.scss'

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button 
        className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 'google-sign-in-button' : ''} 
        custom-button
        `}
        {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
