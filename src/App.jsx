// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import LogIn from './Pages/LogIn';
import LandingPage from './Pages/Landing.pg';
import Register from './Pages/Registor';
import Home from './Pages/Home';

function App() {


  return (
    <>
       <BrowserRouter>
       <div style={{backgroundColor: "grey"}}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
