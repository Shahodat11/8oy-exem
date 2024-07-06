import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../context/slices/authSlice";
import { useGetInputValue } from "../../hooks/useGetInputValue";

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
        <form onSubmit={handleLogin}>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="UserName john32"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password 87654321"
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
