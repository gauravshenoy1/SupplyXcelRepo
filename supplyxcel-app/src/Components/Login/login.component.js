import React, { Component } from "react";
import "./login.scss";
import Logo from '../Images/Icons/favicon.png';
export default class LoginComp extends Component {
  render() {
    const { handleChange,handleauth,LogError,DetailErr } = this.props;
    return (
      <div className="LoginContainer">
      { LogError && <div className="LogError">
         <p className="LogErrorMsg">Wrong Credentials</p>
        </div>}
        <div className="login1">
          <div className="head">
            <h1 className="company">SupplyXcel</h1>
            <img src={Logo} alt="Logo" width="100px"  />
          </div>
          <p className="msg">User Login</p>
          <form className="login" onSubmit={handleauth}>
          <div className="form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="text"
                onChange={handleChange}
                autoComplete="off"
              />
              {DetailErr.login && <span style={{color:"white"}}>Please Enter Username</span>}
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="password"
                onChange={handleChange}
                autoComplete="off"
              />
              {DetailErr.pass && <span style={{color:"white"}}>Please Enter Password</span>}
              <br />
              <button href="/" className="btn-login" type="submit">
                Login
              </button>
          </div>

          </form>
          <div className="reg">
            <a href="https://www.w3schools.com/">Click here to Register</a>

          </div>

        </div>

      </div>
    );
  }
}
