import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './shop'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Shop></Shop>
      <Footer></Footer>
    </>
  )
}

export default App
