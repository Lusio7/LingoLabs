import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'

export default class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      loggedin: isAuthenticated()
    }
  }
  // this.submit.bind(this
  submit(e) {
    e.preventDefault()
    e.stopPropagation()
    
    let form = e.target
    let formData = new FormData(form)
    let params = new URLSearchParams(formData)
    console.log(params);

    fetch('/api/login', {
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
          <h1>Login</h1>
          <form 
          onSubmit={this.submit.bind(this)}
          >
            <div>
              <label>Username: </label>
              <input type="text" class="form-control"  name="username" pattern=".{2,16}" required />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" class="form-control"  name="password" pattern=".{6,20}" required />
            </div>
            <div>
              <input type="submit" class="btn btn-primary" value="Log in" />
            </div>
          </form>
        </div>
      )
    }
  }
}
