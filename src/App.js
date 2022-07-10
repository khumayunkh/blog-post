import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router,  Route, Link, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify";


const App = () => {
  return(
    <>
    <Header/>
    <Routes>
      <Route
        path="register"
        element={<Register/>}
      />
      <Route
        path="users/verify/:token"
        element={<Verify/>}
      />
      <Route
        path="login"
        element={<Login/>}
      />
    </Routes>
    </>
  );
};
export default App;

