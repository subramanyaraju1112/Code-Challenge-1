import React, { useState } from "react";
import "./style.css";
import Background from "../../assets/images/png/background@2x.png";
import AmazonLogo from "../../assets/images/png/amazon.png";
import Tree from "../../assets/images/png/tree.png";
import Error from "../../assets/images/svg/error.svg";

const login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorLogin, setErrorLogin] = useState({
    email: "",
    password: "",
    svg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(() => ({
      ...loginData,
      [name]: value,
    }));
  };

  const validateLogin = (key, value) => {
    Object.entries(loginData).forEach(([key, value]) => {
      switch (key) {
        case "email":
          if (!value) {
            setErrorLogin((errorValue) => ({
              ...errorValue,
              email: "The email field is required",
              svg: Error,
            }));
          } else {
            setErrorLogin((errorValue) => ({
              ...errorValue,
              email: "",
            }));
          }
          return;

        case "password":
          if (!value) {
            setErrorLogin((errorValue) => ({
              ...errorValue,
              password: "Enter Password",
              svg: Error,
            }));
          } else {
            setErrorLogin((errorValue) => ({
              ...errorValue,
              password: "",
            }));
          }
          return;
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    validateLogin(name, value);
    console.log(loginData);
  };

  return (
    <>
      <div className="background-section">
        <img src={Background} />
        <div className="container mx-auto">
          <div className="wrapper">
            <div className="wrapper-item">
              <div className="item-header">
                <img src={AmazonLogo} width={120} height={50} />
              </div>

              <div className="item-body">
                <div className="item-img">
                  <span className="login-text">Login</span>
                  <img src={Tree} width={385} height={128} />
                </div>

                <div className="item-form">
                  <form className="form-content">
                    <input
                      className="input-field"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                    />
                    {errorLogin ? (
                      <div className="flex items-center gap-1">
                        <img src={errorLogin?.svg} width={14} height={14} />
                        <span className="error-message">
                          {errorLogin?.email}
                        </span>
                      </div>
                    ) : (
                      <span></span>
                    )}

                    <input
                      className="input-field"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                    />
                    {errorLogin ? (
                      <div className="flex items-center gap-1">
                        <img src={errorLogin?.svg} width={14} height={14} />
                        <span className="error-message">
                          {errorLogin?.password}
                        </span>
                      </div>
                    ) : (
                      <span></span>
                    )}

                    <button className="signIn-btn" onClick={handleClick}>
                      Sign In
                    </button>

                    <div className="flex justify-between">
                      <span className="forgot-text">
                        <a>Forgot Password?</a>
                      </span>
                      <span className="signUp-text">
                        <a>New User? Sign Up</a>
                      </span>
                    </div>

                    <span className="or-text text-center">or</span>

                    <button className="google-btn">CONTINUE WITH GOOGLE</button>
                    <button className="facebook-btn">
                      CONTINUE WITH FACEBOOK
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
