import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/sign-up/SignUp'
import Login from './pages/login/Login'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Card from './components/cards/Card'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    {/* <SignUp/> */}
    {/* <Login/> */}
    <Header/>
    <Hero/>
    <Card/>
    <Footer/>
    </>
  )
}

export default App
