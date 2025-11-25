import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes ,Route} from 'react-router-dom'
import Auth from './pages/Auth'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
    </Routes>    
    </>
  )
}

export default App
