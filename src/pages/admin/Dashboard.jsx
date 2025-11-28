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
              <div className="bg-blue-100 border border-indigo-400/10 flex items-center rounded p-4 pr-8">
                <FontAwesomeIcon icon={faBookJournalWhills} className="max-sm:hidden text-xl text-grey-800" />
                <div className="flex flex-col sm:ml-4 font-medium">
                  <p className="text-blue-500 text-2xl">Total Bookings</p>
                  <p className="text-neutral-900 text-xl mx-8">40</p>
                </div>
              </div>
              <div className="bg-blue-100 border border-indigo-400/10 flex items-center rounded p-4 pr-8">
                <FontAwesomeIcon icon={faSackDollar} className="max-sm:hidden text-xl text-grey-800" />
                <div className="flex flex-col sm:ml-4 font-medium">
                  <p className="text-blue-500 text-2xl">Total Revenue</p>
                  <p className="text-neutral-900 text-xl mx-8">$ 5098</p>
                </div>
              </div>
              <div className="bg-blue-100 border border-indigo-400/10 flex items-center rounded p-4 pr-8">
                <FontAwesomeIcon icon={faUsers} className="max-sm:hidden text-xl text-grey-800" />
                <div className="flex flex-col sm:ml-4 font-medium">
                  <p className="text-blue-500 text-2xl">Total Users</p>
                  <p className="text-neutral-900 text-xl mx-8">35</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              h2.text
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
