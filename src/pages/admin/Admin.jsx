import React from "react";
import "../admin/admin.scss";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  return (
    <div className="admin__content">
      <div className="sidebar">
        <NavLink className="link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="link" to={"admin/createProduct"}>
          Create Product
        </NavLink>
        <NavLink className="link" to={"admin/manageProduct"}>
          Manage Product
        </NavLink>
      </div>
      <div className="cards">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
