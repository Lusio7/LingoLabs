import React, { useEffect, useState } from "react";
import "../Components/style/signin.css";
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'
import "../Components/style/signin.css";
import API from "../utils/API";

function Signup() {

  const [newUser,setNewUser]=useState(
    {username:"",
    password:"",
    email:""

    })

    const[loggedin, setLoggedin]=useState(
      false
    )
  
  
  const handleInputChange = function(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setNewUser({...newUser, [name]: value})};

  const handleSignUpSubmit =  async function(event){
    
    console.log(newUser);
    // this.props.history.push("/"); 
    // this.history.pushState(null, '/');


  event.stopPropagation();
  event.preventDefault();
  var newUserInfo = {username:newUser.username,
                email:newUser.email};
  var newSignup = {username:newUser.username,
             password:newUser.password};
  try{
  API.signup(newSignup)
  .then((data) => {
    console.log(data)
  localStorage.setItem('token', data.token)
  setLoggedin(true)


  // this.history.pushState(null, '/');
  // this.props.history.push("/"); 
  alert("helo!");})
  .then(  API.createUserInfo(newUserInfo)
)  
}
catch(err){
  console.error(err)
}
  
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
      <a href="#openModalSignin" className="nav-links">
        SignUp
      </a>

      <div id="openModalSignin" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Sign Up</h2>
          <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first"></div>
              <form>
                <input
                  type="text"
                  id="login"
                  className="fadeIn second"
                  name="username"
                  placeholder="John Doe"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="email"
                  placeholder="Example@gmail.com"
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
                <input
                  type="submit"
                  id="SignInBtn"
                  className="fadeIn fourth"
                  value="Sign Up"
                  onClick={handleSignUpSubmit}
                />
              </form>
  <div className = {"fadeIn third "+ (loggedin == true ? 'visible':'invisible' )}>Signed Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
