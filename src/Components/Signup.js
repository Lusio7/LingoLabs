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
          <div class="wrapper fadeInDown">
            <div id="formContent">
              <div class="fadeIn first"></div>
              <form>
                <input
                  type="text"
                  id="login"
                  class="fadeIn second"
                  name="Name"
                  placeholder="John Doe"
                />
                <input
                  type="text"
                  id="password"
                  class="fadeIn third"
                  name="email"
                  placeholder="Example@gmail.com"
                />

                <input
                  type="text"
                  id="password"
                  class="fadeIn third"
                  name="login"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  id="SignInBtn"
                  class="fadeIn fourth"
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
