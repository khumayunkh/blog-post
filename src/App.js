import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import LoginForm from "./components/Login/Login"
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
        path="/users"
        element={<Users/>}
      />
      <Route
        path="/registr"
        element={<Registr/>}
      />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
