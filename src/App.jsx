import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes ,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import AllRooms from './pages/AllRooms'
import ViewRoom from './pages/ViewRoom'
import MyBookings from './pages/MyBookings'
import HotelReg from './Components/HotelReg'
import Dashboard from './pages/admin/Dashboard'
import AddRooom from './pages/admin/AddRoom'
import ListRoom from './pages/admin/AddRoom'

function App() {
  return (
    <>
    { 
      false && <HotelReg />
    }
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/rooms' element={<AllRooms/>} />
      <Route path='/rooms/:id' element={<ViewRoom/>} />
      <Route path='/my-bookings' element={<MyBookings/>} />
      
      <Route path='/admin-dashboard' element={<Dashboard/>} />
      <Route path='/admin-add-room' element={<AddRooom />} />
      <Route path='/admin-room-list' element={<ListRoom/>} />
    </Routes> 
    </>
  )
}

export default App
