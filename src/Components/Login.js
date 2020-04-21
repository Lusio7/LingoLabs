import React from "react";
import "../Components/style/signin.css";

function Login() {
  return (
    <div className="m">
      <a href="#openModal" className="nav-links">
        LogIn
      </a>

      <div id="openModal" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">
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
                  name="login"
                  placeholder="Email"
                />

                <input
                  type="text"
                  id="password"
                  className="fadeIn third"
                  name="login"
                  placeholder="password"
                />
                <input
                  type="submit"
                  id="LogInBtn"
                  className="fadeIn fourth"
                  value="Log In"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
