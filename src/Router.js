import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";

// Write checkAuth function here
const checkAuth = () => {
const cookies = cookie.parse(document.cookie);
 console.log(cookies["LoggedIn"])   
    return cookies["LoggedIn"] ? true : false;
}
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return checkAuth() === true ? (
    <Home {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={<Home/>} />} />
      <Route path="/about" element={<ProtectedRoute component={About} />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/car/:id" element={<ProtectedRoute element={<Car/>} />} />
    </Routes>
  );
};

export default Router;

