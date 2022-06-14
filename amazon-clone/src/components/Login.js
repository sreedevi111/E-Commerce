import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import {auth} from "../firebase"

function Login() {

  //initial state is set to empty string
  const history =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 //function to login
  const SignIn = e  =>{
      e.preventDefault()

      auth
      .signInWithEmailAndPassword(email,password)
      .then((auth) =>{
        console.log(auth.user.auth)
        history('/')
      })
      .catch(error=>alert(error.message))

  }

  //to register
  const register = e =>{
    e.preventDefault()

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          //navigates to home page
            history('/')
        }
    })
    .catch(error => alert(error.message))
 }

  //for logo
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
      
        <form>
          <h5> E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button onClick={SignIn} type="submit" className="login_signInButton">
            SignIn
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
