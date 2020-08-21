import React from 'react'

import './signUp.styles.scss'

import FormInput from '../formInput/formInput.component'
import CustomButton from '../customButton/customButton.component'
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      displayName: '',
      password: '',
      checkPassword: ''
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) =>  {
    event.preventDefault()

    const { email, displayName, password, checkPassword } = this.state

    if(password !== checkPassword) {
      alert("Passwords don't match")
      return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        
        createUserProfileDocument(user, { displayName })

        this.setState({
          email: '',
        displayName: '',
        password: '',
        checkPassword: ''
        })

    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    const { email, displayName, password, checkPassword } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            type= 'displayName' 
            name='displayName' 
            label='Display Name' 
            value={displayName} 
            handleChange={handleChange}
            required />
          <FormInput 
            type= 'email' 
            name='email' 
            label='Email' 
            value={email} 
            handleChange={handleChange}
            required />
          <FormInput 
            type= 'password' 
            name='password' 
            label='Password' 
            value={password} 
            handleChange={handleChange}
            required />
          <FormInput 
            type= 'password' 
            name='checkPassword' 
            label='Confirm Password' 
            value={checkPassword} 
            handleChange={handleChange}
            required />
          <div className='buttons'>
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
