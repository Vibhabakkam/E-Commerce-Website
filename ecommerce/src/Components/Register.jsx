// import React, { useState } from "react";
// import { encryptData } from "../utils/encrypt";
// import { useNavigate } from "react-router-dom";


// const Register = () => {
//     const router = useNavigate;
//     function routeLogin() {
//         router("/login");
//       }
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const updatingData = (e) => {
//     var name = e.target.name;
//     var value = e.target.value;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let dataFromLs = JSON.parse(localStorage.getItem("userData")) || [];

//     for(let i=0 ; i< dataFromLs.length; i++){
//         if(dataFromLs[i].email === userData.email){
//             return alert("User is already present");
//         }

//     }

//     let userInfo = {
//       name: userData.name,
//       email: userData.email,
//       password: encryptData(userData.password),
//     };

//     dataFromLs.push(userInfo);

//     localStorage.setItem("userData", JSON.stringify(dataFromLs));
//     alert("Register Sucessful");
//     router("/login");
//   };

//   return (
//     <>
//       <form onSubmit={(event) => handleSubmit(event)}>
//         <label>Name</label>
//         <br />
//         <input
//           onChange={updatingData}
//           name="name"
//           value={userData.name}
//           type="text"
//           placeholder="Type your Name"
//         />
//         <br />
//         <label>Email</label>
//         <br />
//         <input
//           onChange={updatingData}
//           name="email"
//           value={userData.email}
//           type="email"
//           placeholder="Type your Email"
//         />
//         <br />
//         <label>Password</label>
//         <br />
//         <input
//           onChange={updatingData}
//           name="password"
//           value={userData.password}
//           type="password"
//           placeholder="Type your Passwrd"
//         />
//         <br />
//         <button onClick={routeLogin}> Already have account 
//         </button>
//         <br />
//         <input type="submit" value="Register" />
//       </form>
//     </>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { encryptData } from '../utils/encrypt';
import { useNavigate } from 'react-router-dom';
import "./../Components/Register.css";

const Register = () => {
  const router = useNavigate();

  function routeLogin() {
    router('/login');
  }

  const initialUserData = {
    name: '',
    email: '',
    password: '',
  };

  const [userData, setUserData] = useState(initialUserData);

  const updatingData = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dataFromLs = JSON.parse(localStorage.getItem('userData')) || [];

    for (let i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        return alert('User is already present');
      }
    }

    let userInfo = {
      name: userData.name,
      email: userData.email,
      password: encryptData(userData.password),
    };

    dataFromLs.push(userInfo);

    localStorage.setItem('userData', JSON.stringify(dataFromLs));
    alert('Registration Successful');

    // Reset the input fields to their initial empty values
    setUserData(initialUserData);

    router('/login');
  };

  return (
    <div id='registration-main'> 
        <h1>Registration Page</h1>
      <form onSubmit={(event) => handleSubmit(event)} id="registration-form">
        <label htmlFor="name">Name</label>
        <br />
        <input
          onChange={updatingData}
          name="name"
          value={userData.name}
          type="text"
          id="name"
          placeholder="Type your Name"
          required
        />
        <br />
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
        <button onClick={routeLogin} id="login-link">
          Already have an account
        </button>
        <br />
        <input type="submit" value="Register" id="register-button" />
      </form>
    </div>
  );
};

export default Register;

