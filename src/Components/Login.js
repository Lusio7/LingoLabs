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

          <div class="wrapper fadeInDown">
            <div id="formContent">
              <div class="fadeIn first"></div>

              <form>
                <input
                  type="text"
                  id="login"
                  class="fadeIn second"
                  name="login"
                  placeholder="Email"
                />

                <input
                  type="text"
                  id="password"
                  class="fadeIn third"
                  name="login"
                  placeholder="password"
                />
                <input
                  type="submit"
                  id="LogInBtn"
                  class="fadeIn fourth"
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
