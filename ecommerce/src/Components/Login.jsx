import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { decryptData } from "../utils/encrypt";
import { generateRandomToken } from "../utils/ganrateToken";
import "./../Components/Login.css";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useNavigate();

  function routeRegister() {
    router("/register");
  }

  function handleSubmit(e) {

    try {
        
    e.preventDefault();
    var dataFromLs = JSON.parse(localStorage.getItem("userData"));
    var decPass = "";

    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        decPass = decryptData(dataFromLs[i].password);
        break;
      }
    }

    if (decPass === userData.password) {
      var user = {};
      const token = generateRandomToken();
      user["current-user-email"] = userData.email;
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      router("/");
      alert("Login successful");
    } else {
      alert("Email or Password does not match");
    }      
    } catch (error) {
      alert("No Users in Database"); 
    }



  }

  function updatingData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div id="login-top">
      <div id="login-container">
        <div>
          <h1>Login Page</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} id="login-form">
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={updatingData}
            name="email"
            value={userData.email}
            type="email"
            id="email"
            placeholder="Type your Email"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={updatingData}
            name="password"
            value={userData.password}
            type="password"
            id="password"
            placeholder="Type your Password"
            required
          />
          <br />
          <button onClick={routeRegister} id="register-link">
            Register
          </button>
          <br />
          <input id="login-submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
