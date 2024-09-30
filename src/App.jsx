import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import { LogIn } from './Pages/LogIn';
import LandingPage from './Pages/Landing.pg';
import { Registor } from './Pages/Registor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage />} />
            <Route path="/sign-up" element={<Registor />} />
            <Route path="/log-in" element={<LogIn />} />
            {/* <Route path="/home" element={<Todo />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
