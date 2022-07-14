import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import LoginForm from "./components/Login/Login"
import Footer from "./Footer/Footer"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route
      path="/login"
      element={<LoginForm/>}
      />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
