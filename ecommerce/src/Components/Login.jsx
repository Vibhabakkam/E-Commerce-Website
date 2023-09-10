import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { decryptData } from "../utils/encrypt";
import { generateRandomToken } from "../utils/ganrateToken";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const router = useNavigate();

  function routeRegister() {
    router("/register");
  }
 
  function handleSubmit(e) {
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
      localStorage.setItem("token",JSON.stringify(token))
      router("/");
      alert("Login sucessful");
    } else {
      alert("Email or Password does not match");
    }
  }

  function updatingData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <br />
        <input
          onChange={updatingData}
          name="email"
          value={userData.email}
          type="email"
          placeholder="Type your Email"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          onChange={updatingData}
          name="password"
          value={userData.password}
          type="password"
          placeholder="Type your Passwrd"
        />
        <br />
        <button onClick={routeRegister}>Register</button>
        <br />
        <input id="Rsubmit" type="submit" value="Login" />
      </form>
    </>
  );
}
export default Login;