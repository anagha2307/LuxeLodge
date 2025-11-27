import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes ,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import AllRooms from './pages/AllRooms'
import ViewRoom from './pages/ViewRoom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/rooms' element={<AllRooms/>} />
      <Route path='/rooms/:id' element={<ViewRoom/>} />
    </Routes> 
    </>
  )
}

export default App
