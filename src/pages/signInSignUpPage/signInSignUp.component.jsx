import React from 'react'

import SignIn from '../../components/signIn/signIn.component'
import SignUp from '../../components/signUp/signUp.component'

import './signInSignUp.styles.scss'

function SignInSignUp() {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
