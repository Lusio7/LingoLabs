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
      "false"
    )
  
  
  const handleInputChange = function(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setNewUser({...newUser, [name]: value})};

  const handleSignUpSubmit =  async function(event){
    
    console.log(newUser);
    console.log("========")
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
  .then(function(data){
    console.log(data)
  setLoggedin("true")


  alert("Signup Success!")})
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
       
          <h2>Sign Up</h2>
          <div className="wrapper fadeInDown">

          <div className = {"fadeIn third "+ (loggedin ==="true"? 'visible':'invisible' )}>
          <center>   
            <p className="backhomeurl4">Signup Success!</p>
          <Avatar src={usersolid} />
          </center>   
<a className="backToHome" href="/">
  <h3 class="backhomeurl3">Return to homepage, click here</h3>
  </a>
  </div>
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
 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
