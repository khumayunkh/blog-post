import React from "react"
import { Route, Routes } from "react-router-dom"
import AddArticles from "./components/AddArticls/Add"
import Articles from "./components/Articles/Articles"
import Header from "./components/Header/Header"
import LoginForm from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import Registr from "./components/Registration/Registration"
import Footer from "./components/Footer/Footer"
import Users from "./components/Users/Users"

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
        path="/articles"
        element={<Articles/>}
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
