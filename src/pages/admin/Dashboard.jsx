import React from 'react'
import Navbar from '../../Components/admin/Navbar'
import AdminSideBar from '../../Components/admin/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookJournalWhills, faSackDollar ,faUsers} from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex md:flex-row flex-col h-full">
          <AdminSideBar />
          <div className="p-5 m-6">
            <div className="flex flex-col items-start text-left">
              <h1 className="text-3xl mt-5 md:text-[40px]">Dashboard</h1>
              <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                Track performance, manage users, and handle updates in one place.
                Keep everything running smoothly and efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 w-full">
              <div className="bg-blue-100 border border-indigo-400/10 flex lg:flex-row md:flex-col items-center rounded md:p-4 p-2 md:gap-2 gap-4">
                <FontAwesomeIcon icon={faBookJournalWhills} className="text-xl text-grey-800" />
                <div className="flex flex-col sm:ml-4 font-medium">
                  <p className="text-blue-500 text-xl lg:text-2xl">Total Bookings</p>
                  <p className="text-neutral-900 text-xl">40</p>
                </div>
              </div>
              <div className="bg-blue-100 border border-indigo-400/10 flex lg:flex-row md:flex-col items-center rounded md:p-4 p-2 md:gap-2 gap-4">
                <FontAwesomeIcon icon={faSackDollar} className="text-xl text-grey-800" />
                <div className="flex flex-col sm:ml-4 font-medium">
                  <p className="text-blue-500 text-xl lg:text-2xl">Total Revenue</p>
                  <p className="text-neutral-900 text-xl">$5098</p>
                </div>
              </div>
              <div className="bg-blue-100 border border-indigo-400/10 flex lg:flex-row md:flex-col items-center rounded md:p-4 p-2 md:gap-2 gap-4">
                <FontAwesomeIcon icon={faUsers} className="max-sm:hidden text-xl text-grey-800" />
                <div className="flex flex-col sm:ml-4 font-medium">
                  <p className="text-blue-500 text-xl lg:text-2xl">Total Users</p>
                  <p className="text-neutral-900 text-xl">35</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-blue-950 text-xl font-medium mb-5">Recent Bookings</h2>
              <div className="w-full max-w-3xl text-left border border-gray-200 rounded-lg">
                  <table className="w-full text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 py-4 text-gray-800 font-medium">Username</th>
                        <th className="py-3 py-4 text-gray-800 font-medium">Hotel name</th>
                        <th className="py-3 py-4 text-gray-800 font-medium">Total amount</th>
                        <th className="py-3 py-4 text-gray-800 font-medium">Payment Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">User</td>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">Double Bed</td>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">$ 400</td>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">
                          <button className="px-3 py-1 text-xs rounded-full mx-auto bg-green-200 text-green-600">Completed</button>
                        </td>   
                      </tr>
                      <tr>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">User</td>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">Double Bed</td>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">$ 400</td>
                        <td className="py-3 py-4 text-gray-700 border-t border-gray-200">
                          <button className="px-3 py-1 text-xs rounded-full mx-auto bg-yellow-200 text-red-600">Pending</button>
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

export default Dashboard
