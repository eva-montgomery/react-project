import React from "react";
import { Redirect, Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <div className="main-content">
          <h3>Are you a Wine Lover?</h3>
          <br></br>
          <p>
            Do you ever go to the grocery store and stand in the wine section,
            not remembering if you have ever tried a specific wine before and if
            you liked it or not?{" "}
          </p>
          <p>You are not alone! </p>
          <p>
            {" "}
            Therefore, I present you Wine-O-Clock! Login or create an account,
            to add the wines you tried and give them a wine-rating from 1-5, so
            every time you go to the store you can look in your app and check if
            you have already tried this wine!
          </p>
          <h4>And remember: It's Wine-O-Clock somewhere! Cheers!</h4>
        </div>

        <div className="login-form-container">
          <div className="login-box">
            <form onSubmit={this._handleSubmit}>
              <input
                className="login-input"
                onChange={this._handleEmail}
                value={this.state.email}
                placeholder="E-Mail"
              />
              <input
                type="password"
                className="login-input"
                onChange={this._handlePassword}
                value={this.state.password}
                placeholder="Password"
              />{" "}
              <br></br> <br></br>
              <input type="submit" value="Sign in" className="login-submit" />
              <br></br> <br></br>
              <div>
                Don't have an account?{" "}
                <Link to="/signup" id="signup">
                  Sign up here
                </Link>
              </div>
            </form>
          </div>
          {this.props.loginStatus.isLoggedIn == true ? (
            <Redirect to="/home" />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleSubmit(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  _handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  _handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
}
