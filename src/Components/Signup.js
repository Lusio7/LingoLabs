import React from "react";
import "../Components/style/signin.css";

function Signup() {
  return (
    <div className="m">
      <a href="#openModalSignin" className="nav-links">
        SignUp
      </a>

      <div id="openModalSignin" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">
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
                  name="Name"
                  placeholder="John Doe"
                />
                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="email"
                  placeholder="Example@gmail.com"
                />

                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="login"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  id="SignInBtn"
                  className="fadeIn fourth"
                  value="Sign Up"
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
