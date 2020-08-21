import React from 'react'

import './customButton.styles.scss'

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button 
        className={`
        ${isGoogleSignIn ? 'google-sign-in-button' : ''} custom-button
        `}
        {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton