import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { login, registerUser, activeShop } from "../features/userSlice";
import styled from "styled-components";

function register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const addUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.success === true) {
        console.log("Success========: " + response.data.success);

        dispatch(
          registerUser({
            username: username,
            email: email,
          })
        );
        console.log("In frontend register");

        window.location.pathname = "/home";
      }
    });
  };

  return (
    <>
      <div className="bg-modal">
        <div className="modal-content">
          <div
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              fontFamily: "Tahoma",
            }}
          >
            <h4>Create your account</h4>
            <p>Registration is easy.</p>
          </div>
          <form className="signin_form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                className="email"
                id="email"
                placeholder="Enter email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                className="username"
                id="username"
                placeholder="Enter username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
              />
            </div>

            <div className="htmlForm-group">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="forgot_password"></div>
            <button onClick={addUser} type="submit" className="btn btn-primary">
              Register
            </button>

            <RegisterContainer>
            <div class="or-container">
              <div class="line-separator"></div>
                <div class="or-label">OR</div>
              <div class="line-separator"></div>
            </div>
            </RegisterContainer>
            <div>
                <div   style={{backgroundColor: 'white'}} class="col-md-12"> <a class="btn btn-lg btn-google btn-block text-lowercase btn-outline" 
                  href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> 
                  <span style={{color: 'white'}} > continue with google</span></a> </div>
            </div>

            <div>
                <div style={{backgroundColor: 'white'}}class="col-md-12"> <a class="btn btn-lg btn-google btn-block text-lowercase btn-outline" 
                  href="#"><img src="https://img.icons8.com/color/16/000000/facebook.png" /> 
                  <span style={{color: 'white'}} > continue with Facebook</span></a> </div>
            </div>

            <div>
                <div  style={{backgroundColor: 'white'}} class="col-md-12"> <a class="btn btn-lg btn-google btn-block text-lowercase btn-outline" 
                  href="#"><img src="https://img.icons8.com/color/16/000000/apple-logo.png" /> 
                  <span style={{color: 'white'}} > continue with apple</span></a> </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default register;


const RegisterContainer = styled.footer`
body {
  background-color: #f2f7fb
}

.login-block {
  margin: 30px auto;
  min-height: 93.6vh
}

.login-block .auth-box {
  margin: 20px auto 0;
  max-width: 450px !important
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 0 5px 0 rgba(43, 43, 43, .1), 0 11px 6px -7px rgba(43, 43, 43, .1);
  box-shadow: 0 0 5px 0 rgba(43, 43, 43, .1), 0 11px 6px -7px rgba(43, 43, 43, .1);
  border: none;
  margin-bottom: 30px;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  background-color: #fff
}

.card .card-block {
  padding: 1.25rem
}

.f-80 {
  font-size: 80px
}

.form-group {
  margin-bottom: 1.25em
}

.form-material .form-control {
  display: inline-block;
  height: 43px;
  width: 100%;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  padding: 9px;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #ccc
}

.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px
}

.btn-primary {
  background-color: #4099ff;
  border-color: #4099ff;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all ease-in .3s;
  transition: all ease-in .3s
}

.btn {
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer
}

.m-b-20 {
  margin-bottom: 20px
}

.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px
}

.heading {
  font-size: 21px
}

#infoMessage p {
  color: red !important
}

.btn-google {
  color: #545454;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #ddd
}

.or-container {
  align-items: center;
  color: #ccc;
  display: flex;
  margin: 25px 0
}

.line-separator {
  background-color: #ccc;
  flex-grow: 5;
  height: 1px
}

.or-label {
  flex-grow: 1;
  text-align: center
}
 
`;

