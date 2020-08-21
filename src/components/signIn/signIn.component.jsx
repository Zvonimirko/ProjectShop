import React, { Component } from 'react'

import FormInput from '../formInput/formInput.component'
import CustomButton from '../customButton/customButton.component'

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signIn.styles.scss'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
   const { name, value } = event.target
   this.setState({
     [name]: value
   })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            handleChange={this.handleChange} 
            value={email}
            label='email'
            required
          />
          <FormInput 
            name='password'
            type='password'
            handleChange={this.handleChange} 
            value={password}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn