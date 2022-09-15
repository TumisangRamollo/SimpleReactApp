import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isChecked: false,
    validation: "",
  });

  const [show, setShow] = useState(false);

  const [values, setValues] = useState([]);

  const handleChange = (e) => {
    let checked = e.target.isChecked;
    let value = e.target.value;

    setUser({ user, [e.target.name]: value && checked });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { username, password, isChecked, validation } = user;

      setValues([...values ,user])
      setUser({
        validation: "Login succesfully",
      });
      setShow(true);
    // } else {
    //   setUser({
    //     validation: "Wrong username or password",
    //   });
    // }
  };

  const handleSignUp = (_) => {
    console.log("Sign up");
  };

  console.log("values", values);

  const { username, password, isChecked, validation } = user;

  return (
    <div>
      <div>
        <h1 style={{padding:"2rem", textAlign: "center", color: "rgba(40,57,101,.9)" }}>
          Simple react form for testing Playwright Framework
        </h1>
      </div>
      <br />
      <div>
        <div class="login-form">
          <form onSubmit={handleSignIn} class="sign-in-htm">
            <div style={{display:"flex" , gap:"20px"}}>
              <div>
                <input id="tab-1" type="radio" name="tab" />
                <label for="tab-1">Sign In</label>
              </div>
              <div>
                <input id="tab-2" type="radio" name="tab" />
                <label for="tab-2" class="tab">
                  Sign Up
                </label>
              </div>
            </div>
            <div class="group">
              <br />
              <label for="user" class="label">
                Username
              </label>
              <input
                name="username"
                type="email"
                class="input"
                onChange={(e) => handleChange(e)}
                value={username}
              />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                class="input"
                name="password"
                data-type="password"
                value={password}
              />
            </div>
            <div class="group">
              <input
                name="isChecked"
                onChange={(e) => handleChange(e)}
                type="checkbox"
              />
              <label for="check">Keep me Signed in</label>
            </div>
            <div class="group">
              <input type="submit" class="button" value="Sign In" />
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
              <a href="#forgot" disabled="true">
                Forgot Password?
              </a>
            </div>
            <div>
            </div>
          </form>
              <p style={{color:"red", textAlign:"center"}}>{validation}</p>

          {/* <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input id="user" onChange={(e) => handleChange(e)}  type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  onChange={(e) => handleChange(e)} 
                  data-type="password"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Repeat Password
                </label>
                <input
                onChange={(e) => handleChange(e)} 
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input 
                onChange={(e) => handleChange(e)} id="pass" type="text" class="input" />
              </div>
              <div class="group">
                <input
                  type="button"
                  class="button"
                  onClick={handleSignUp}
                  value="Sign Up"
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a for="tab-1">Already Member?</a>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;