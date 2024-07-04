// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "../../api";
// import '../login/login.css'
// import Navbar from '../../components/navbar/Navbar'
// import Header from '../../components/header/Header'
// import Footer from '../../components/footer/Footer'

// function Login() {
// const navigation = useNavigate();
//   const [username, setUsername] = useState("mor_2314");
//   const [password, setPassword] = useState("83r5^_");

//   const inpSubmit = (e) => {
//     e.preventDefault();
//     let users = {
//       username,
//       password,
//     };

//     axios
//       .post("/Auth/Login", users)
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         navigation("/Admin");
//       })
//       .catch((err) => {
//         console.error(err);

//       });
//   };
//   return (
//     <>
//       <Navbar/>
//       <Header/>
//     <div className='container'>
//     <form onSubmit={inpSubmit} >
//           <label htmlFor="text">
//             <p>Username</p>
//             <input className='input'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               type="text"
//               id="text"
//               name="text"
//               placeholder="Enter Your Email"
//             />
//           </label>
//           <label htmlFor="password">
//             <p>Password</p>
//             <input className='input'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter Your password"
//             />
//           </label>

//           <button type="submit">
//             Login
//           </button>
//         </form>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default Login
