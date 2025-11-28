import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { rooms } from '../assets/roomsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons'

const MyBookings = () => {
    const [bookings, setBookings] = useState()

    return (
        <>
            <Header />
            <div className="flex flex-col items-start  py-28 md:py-35 px-4 md:px-16 lg:px-24">
                <div className="flex flex-col items-start">
                    <h1 className="text-4xl mt-5 md:text-[40px]">My Bookings</h1>
                    <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                        Discover handpicked stays tailored to your comfort — compare prices, browse amenities, and find the perfect room for every occasion, from quick getaways to luxury escapes.
                    </p>
                </div>
                <div className="max-w-6xl mt-8 w-full text-gray-800">
                    <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
                        <div className="w-1/3">Hotels</div>
                        <div className="w-1/3">Date & Timings</div>
                        <div className="w-1/3">Payment</div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] py-6 border-b border-gray-300 first:border-t'>
                        {/* Hotel details */}
                        <div className="flex flex-col md:flex-row">
                            <img src="https://t4.ftcdn.net/jpg/06/32/20/07/360_F_632200724_WuOGPlu1XfDjqUinsBGzHXaa8TVtdqD9.jpg" alt="booking image" className='md:w-44 rounded shadow-md object-cover' />
                            <div className="flex flex-col gap-1 5 max-md:mt-3 min-md:ml-4">
                                <p className="text-2xl">Hotel Name</p>
                                <span className="text-sm">(Room Type)</span>
                                <div className="flex items-center text-gray-500 mt-2 text-sm">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-teal-600" />
                                    <span>hotel address</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                                    <FontAwesomeIcon icon={faUsers} className="text-gray-900" />
                                    <span>Guests : 2</span>
                                </div>
                                <p className="text-base">Total : $ 299</p>
                            </div>

                        </div>
                        {/* Date and timings */}
                        <div className="flex flex-col md:flex-row md:items-center items-start md:gap-10 gap-2">
                            <div>
                                <p>Check In</p>
                                <p className="text-gray-400 text-sm">22 Dec 2025</p>
                            </div>
                            <div>
                                <p>Check Out</p>
                                <p className="text-gray-400 text-sm">26 Dec 2025</p>
                            </div>
                        </div>
                        {/* Payment */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start  pt-3">        
                            {
                                /*<div className="flex items-center gap-4">
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <p className="text-green-500">Paid</p>
                            </div> */
                            }
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                    <p className="text-red-500">Unpaid</p>
                                </div>
                                <button className="px-4 py-1 5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 trasition-all cursor-ponter">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyBookings
