import React, { useState } from "react"
import InputArea from "./InputArea"
import Heading from "./Heading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
function Login() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value

    }))
  }


  function handleClick(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", user)
      .then((res) => {
        console.log(res.data.message);
        if (res.status === 200 && res.data.message === "Valid user") {
          navigate("/landingpage");
        }
      })
      .catch((error) => {
        console.log("Error logging in:", error);

        alert("Invalid user");
        // Handle login error, such as displaying an error message
      });

  }




  return (
    <div class="SignUpBody">
      <div className="signupFrm">
        <form className="form">
          <Heading className="title" headingText="Login" />

          <div className="inputContainer">
            <InputArea
              onChange={handleChange}
              name="username"
              value={user.username}
              type="text"
              className="input"
              placeholder="Username"
              labelClassName="label"
              labelValue="Username" />
          </div>

          <div className="inputContainer">
            <InputArea
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              className="input"
              placeholder="Password"
              labelClassName="label"
              labelValue="Password" />
          </div>




          <input type="submit" className="submitBtn" value="Login" onClick={handleClick} />

        </form>
      </div>
    </div>
  )
}

export default Login 