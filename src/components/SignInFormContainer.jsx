import React from 'react'
import SignInForm from './SignInForm'
import { connect } from 'react-redux'
import { signIn } from '../actions'

class SignInFormContainer extends React.Component {
  state = { email: '', password: '' }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.signIn(this.state.email, this.state.password)  //THE SIGN UP WORKS!!
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return <SignInForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}
export default connect(null, { signIn })(SignInFormContainer)