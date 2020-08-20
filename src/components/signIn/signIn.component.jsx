import React, { Component } from 'react'

import FormInput from '../formInput/formInput.component'

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
    console.log(email)
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
          <button type='submit'>Sign In</button>
          <button>Sign in with Google</button>
        </div>
        </form>
       <h3>{email}</h3>
      </div>
    )
  }
}

export default SignIn