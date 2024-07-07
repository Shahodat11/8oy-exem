import React, { useEffect } from "react";
import "../login/login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../context/slices/authSlice";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import logo from "../../assets/Group 64.svg";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange } = useGetInputValue(initialState);
  const isLogin = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username === "john32" && formData.password === "87654321") {
      console.log("welcome");
      dispatch(setToken("fake-token"));
      navigate("/admin");
    } else {
      console.log("username or password is incorrect");
    }
  };

  useEffect(() => {
    if (isLogin === "fake-token") {
      navigate("/admin");
    }
  }, [isLogin, navigate]); // Add dependencies here

  return (
    <div className="login">
      <div className="container">
        <div className="contact-page">
          <div className="contact">
            <NavLink to={`/`}>
              <img className="logo contact-h1" src={logo} alt="" />
            </NavLink>
            <h2 className="contact-tel">8 (800) 890-46-56</h2>
            <p className="contact-p">
              Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны:
            </p>
          </div>
          <div className="contact1" onChange={(e) => console.log(e.target)}>
            <form onSubmit={handleLogin}>
              <label htmlFor="text">
                <p className="contact-label">Username</p>
                <input
                  className="contact-input"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="username"
                />
              </label>
              <label htmlFor="text">
                <p className="contact-label">Password</p>
                <input
                  className="contact-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                />
              </label>
              <button className="contact-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// <div className='container'>
//   <Navbar/>
//   <Header/>
//   <div className="contact-page">
//     <div className="contact">
//       <h1 className='contact-h1'>Get in touch</h1>
//       <h2 className='contact-email'>contact@e-comm.ng</h2>
//       <h2 className='contact-tel'>+234 4556 6665 34</h2>
//       <p className='contact-p'>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
//     </div>
//     <div className="contact1" onChange={e => console.log(e.target)}>
//       <form onSubmit={handleSubmit}  action="">
//         <label htmlFor="text">
//           <p className='contact-label'>Fullname</p>
//           <input className='contact-input' value={data.fullname} onChange={e=> setData(p =>({...p, fullname: e.target.value}))} type="text" placeholder='James Doe'/>
//         </label>
//         <label htmlFor="text">
//           <p className='contact-label'>Email</p>
//           <input className='contact-input' value={data.email} onChange={e=> setData(p =>({...p, email: e.target.value}))} type="email" placeholder='laylo@gmail.com'/>
//         </label>
//         <button className='contact-button'>Buy now</button>
//       </form>
//     </div>
// </div>
// </div>
// <Footer/>
