import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loggedin: isAuthenticated()
    }
  }

  submit(e) {
    e.preventDefault()
    e.stopPropagation()

    let form = e.target
    let formData = new FormData(form)
    let params = new URLSearchParams(formData)

    // Some browsers don’t support
    // "new URLSearchParams(formData)" syntax
    // In which case, please do as follows
    //
    // let param = new URLSearchParams()
    // param.append('username', formData.get('username'))
    // param.append('password', formData.get('password'))
    // param.append('remember', formData.get('remember'))

    // You must need to valide data but I skip in here

    // Send request to the server
    fetch('/api/signup', {
      method: 'POST',
      body: params
    }).then( (res) => {
      return res.json()
    }).then(data => {
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})
    }).catch( (err) => {
      console.error(err)
    })
  }

  render() {
    if ( this.state.loggedin ) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      )
    } else {
      return (
        <div class="form-group container">
          <h1>Signup</h1>
          <form onSubmit={this.submit.bind(this)}>
            <div>
              <label>Username: </label>
              <input type="text" class="form-control" name="username" pattern=".{2,16}" required />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" class="form-control" name="password" pattern=".{6,20}" required />
            </div>
            <div>
              <input type="submit" class="btn btn-primary" value="Sign up" />
            </div>
          </form>
        </div>
      )
    }
  }
}
