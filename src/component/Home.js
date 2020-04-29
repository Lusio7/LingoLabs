import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount() {
    fetch('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      return res.json()
    }).then(user => {
      this.setState({user: user})
    }).catch( err => {
      console.log(err)
    })
  }

  render() {
    let username = this.state.user.username
    return (
      <div class="jumbotron text-center container">
        
        <h1 class="display-4">Welcome, {username}!</h1>
      
      </div>
      
    )
  }
}
