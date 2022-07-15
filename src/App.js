import React from "react"
import { Route, Routes } from "react-router-dom"
import AddArticles from "./components/AddArticls/Add"
import Header from "./components/Header/Header"
import LoginForm from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import Registr from "./components/Registration/Registration"
import Footer from "./Footer/Footer"
import Users from "./Users/Users"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route
        path="/login"
        element={<LoginForm/>}
      />
      <Route
        path="/registr"
        element={<Registr/>}
      />
      <Route
        path="/users"
        element={<Users/>}
      />
      <Route
        path="/add"
        element={<AddArticles/>}
      />
      <Route
        path="/profile"
        element={<Profile/>}
      />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
