import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      login: false,
      store: null,
      redirection: false,
      tokens: null,

    };
  }
  

  login(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        console.warn("result", result);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: result.token,
            userId: result.userId,
          })
        );

        this.setState({ login: true, redirection: true, tokens:result.token });
      
      
      });
    });
  }
  render() {
   
    if (this.state.redirection && this.state.tokens) {
      return <Redirect to="/" />;
    }
    return (
      <div className="body">
        <div className="loginbox">
        <LazyLoadImage src="assets/img/logo/logoo.png" className="woman" alt="" />
          <b>
            <h1>Connexion</h1>
          </b>
          <form
            onSubmit={(e) => {
              this.login(e);
            }}
          >
            <span className="row">
              <i className="fas fa-user" />
              <input
                type="text"
                name
                placeholder="Enter Email"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </span>
            <span className="row">
              <i className="fas fa-lock"></i>

              <input
                type="password"
                name
                placeholder="Enter Mot de passe"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
            </span>
            <input type="submit" name defaultValue="login" value="Connexion" />
            {/* <b><a href="#">lost your password?</a></b> <br /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
