import React, { useState } from "react";


import { useNavigate } from "react-router-dom";

import InputArea from "./InputArea";
import Heading from "./Heading";
import axios from "axios";



function SignUp() {

  const navigate = useNavigate()


  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/signup", user)
      .then((res) => {
        console.log(res.data.message);
        if (res.status === 200 && res.data.message === "User created successfully") {
          navigate("/signupsucessful");
        }
        // Handle successful user creation
      })
      .catch((error) => {
        console.log('Error creating user:', error);
        // Handle error
      });
  }

  return (
    <div className="SignUpBody">
      <div className="signupFrm">
        <form className="form">
          <Heading className="title" headingText="Sign Up" />


          <InputArea
            value={user.fullName}
            name="fullName"
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Full Name"
            labelClassName="label"
            labelValue="Full Name"



          />



          <InputArea
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Email"
            labelClassName="label"
            labelValue="Email"
            name="email"
            value={user.email}
          />



          <InputArea
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Username"
            labelClassName="label"
            labelValue="Username"
            name="username"
            value={user.username}

          />



          <InputArea
            onChange={handleChange}
            type="password"
            className="input"
            placeholder="Password"
            labelClassName="label"
            labelValue="Password"
            name="password"
            value={user.password}
          />



          <InputArea
            onChange={handleChange}
            type="password"
            className="input"
            placeholder="Confirm Password"
            labelClassName="label"
            labelValue="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
          />


          <input type="submit" className="submitBtn" value="Sign up" onClick={handleSubmit} />

        </form>
      </div>
    </div>
  );
}

export default SignUp;
