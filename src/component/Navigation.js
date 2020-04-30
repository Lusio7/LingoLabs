import React from 'react'
import { Link } from 'react-router-dom'
// import isAuthenticated from '../lib/isAuthenticated'

 const Navigation = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light" >
    <ul style={{display: 'flex',listStyle: 'none'}} class="container">
      <li style={{margin: '0 1em'}}><Link to="/">Home</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/signup">Signup</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/login">Login</Link></li>
      <li style={{margin: '0 1em'}}><Link to="/logout">Logout</Link></li>
    </ul>
  </nav>
)

export default Navigation
