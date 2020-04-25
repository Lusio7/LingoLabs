import React, { useEffect, useState } from "react";
import "../Components/style/signin.css";
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'
import API from "../utils/API"

function Login() {
  const [newUser,setNewUser]=useState(
    {username:"",
    password:"",

    })

    // const random = function(){
    //   API.getRandom()
    // }
  
  const[loggedin, setLoggedin]=useState(
    false
  )

  const handleInputChange = function(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setNewUser({...newUser, [name]: value})};
  // submit.bind()
  // useEffect(() => {
  //   if(loggedin == true){
  //     isAuthenticated();

  //   }},loggedin)

  var handleSubmit= function(e){
    e.preventDefault()
    e.stopPropagation()
    var userlogin={username:newUser.username,
    password:newUser.password}
    console.log(userlogin);
    
 
      API.login(userlogin)
    .then( (res) => {
    // localStorage.setItem('token', res.data.token)
      setLoggedin(true)
      console.log(res.data);
    }).catch( (err) => {
      console.error(err)
    })
  }

  

  


    
      // if (loggedin == true ) {
      //   return (
      //     <Redirect
      //       to={{
      //         pathname: '/',
      //         state: { from: this.props.location }
      //       }}
      //     />
      //   )}
        return (
    <div className="m">
      <a href="#openModal" className="nav-links">
        LogIn
      </a>

      <div id="openModal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Log In</h2>

          <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first"></div>

              <form>
                <input
                  type="text"
                  id="login"
                  className="fadeIn second"
                  name="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="password"
                  placeholder="password"
                  onChange={handleInputChange}

                />
                <input
                  type="submit"
                  id="LogInBtn"
                  className="fadeIn fourth"
                  value="Log In"
                  onClick={handleSubmit}
                />
              </form>
              <div className = {"fadeIn third "+ (loggedin == true ? 'visible':'invisible' )}>logged In</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  

export default Login;




// fetch('/api/login', {
//   method: 'POST',
//   body: params
// }).then( (res) => {
//   return res.json()
// }).then(data => {
//   localStorage.setItem('token', data.token)
//   this.setState({loggedin: true})
// }).catch( (err) => {
//   console.error(err)
// })
// }

// render() {
// if ( this.state.loggedin ) {
//   return (
//     <Redirect
//       to={{
//         pathname: '/',
//         state: { from: this.props.location }
//       }}
//     />
//   )
// } else {
//   return (
//     <div class="form-group container">
//       <h1>Login</h1>
//       <form onSubmit={this.submit.bind(this)}>
//         <div>
//           <label>Username: </label>
//           <input type="text" class="form-control"  name="username" pattern=".{2,16}" required />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input type="password" class="form-control"  name="password" pattern=".{6,20}" required />
//         </div>
//         <div>
//           <input type="submit" class="btn btn-primary" value="Log in" />
//         </div>
//       </form>
//     </div>
//   )
// }
// }
// }