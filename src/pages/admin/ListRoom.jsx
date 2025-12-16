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
          <div className="p-5 m-5">
            <div className="flex flex-col items-start text-left">
              <h1 className="text-3xl mt-5 md:text-[40px]">Room Listings</h1>
              <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                Manage and update complete room details, pricing, images, and amenities effortlessly.
                Keep all listings organized and accurate through a clean and user-friendly admin panel
              </p>
            </div>
            <p className="text-gray-800 my-6">All Rooms</p>
            <div className="mt-2">
              <h2 className="text-blue-950 text-xl font-medium mb-5">Recent Bookings</h2>
              <div className="w-full max-w-3xl text-left border border-gray-200 rounded-lg">
                <table className="w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 py-4 text-gray-800 font-medium">Hotel Name</th>
                      <th className="py-3 py-4 text-gray-800 font-medium">Room Type</th>
                      <th className="py-3 py-4 text-gray-800 font-medium">Facility</th>
                      <th className="py-3 py-4 text-gray-800 font-medium">Price per night</th>
                      <th className="py-3 py-4 text-gray-800 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">Hotel</td>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">Double Bed</td>
                      <th className="py-3 py-4 text-gray-800 font-medium">Facility</th>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">$ 400</td>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">
                        <label className="relative inline-flex items-center cursor-pointer text-gray-500 gap-3">
                          <input type="checkbox" className="peer sr-only"/>
                          <div className="w-12 h-7 bg-slate-700 rounded-full peer-checked:bg-blue-500 transition-colors duration-200"></div>
                          <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">Hotel</td>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">Double Bed</td>
                      <th className="py-3 py-4 text-gray-800 font-medium">Facility</th>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">$ 400</td>
                      <td className="py-3 py-4 text-gray-700 border-t border-gray-200">
                        <label className="relative inline-flex items-center cursor-pointer text-gray-500 gap-3">
                          <input type="checkbox" className="peer sr-only"/>
                          <div className="w-12 h-7 bg-slate-700 rounded-full peer-checked:bg-blue-500 transition-colors duration-200"></div>
                          <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default ListRoom
