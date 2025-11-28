import React from 'react'
import Navbar from '../../Components/admin/Navbar'
import AdminSideBar from '../../Components/admin/AdminSideBar'

const ListRoom = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex h-full">
          <AdminSideBar />
        </div>
      </div>
    </>
  )
}

export default ListRoom
