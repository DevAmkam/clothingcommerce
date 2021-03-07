import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }
  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({[name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email" 
            value={this.state.email} 
            required 
            label="Email"
            />
          <FormInput 
            handleChange={this.handleChange} 
            type="password" 
            name="password" 
            value={this.state.password} 
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
