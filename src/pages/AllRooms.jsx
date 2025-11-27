import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { rooms } from '../assets/roomsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CheckBox = ({label,selected = false, onchange= () => {}}) =>{
    return(
        <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
            <input type="checkbox" checked={selected} onChange={(e) => 
            onchange(e.target.checked,label)} />
            <span className="font-light select-none">{label}</span>
        </label>
    )
}
const AllRooms = () => {
    const navigate = useNavigate()
    const [openFilters, setOpenFilters] = useState(false)
    const bedTypes = ["Single Bed", "Double Bed" , "Luxury Room", "Family Suite"]
    const priceRanges = ["0 to 500","500 to 1000","1000 to 1500","1500 to 2000",]
    const sortOptions = ["Price High to Low", "Price Low to High", "Newest First"]
    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row-reverse items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
                {/* Filters */}
                <div className="w-80 bg-white border border-gray-300 text-gray-600 lg:mb-8 lg:mt-16 ">
                    <div className={`flex items-center justify-between px-5 py-2.5 ${openFilters && "border-b"}`}>
                        <p className="text-base font-medium text-gray-800">FILTERS</p>
                        <div className="text-xs cursor-pointer">
                            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">{openFilters ? "HIDE" : "SHOW"}</span>
                            <span className="hidden lg:block">CLEAR</span>
                        </div>
                    </div>
                    <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
                        <div className="px-5 pt-5">
                            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
                            {
                                bedTypes.map((room,index) => (
                                    <CheckBox key={index} label={room}/>
                                ))
                            }
                        </div>
                        <div className="px-5 pt-5">
                            <p className="font-medium text-gray-800 pb-2">Price Ranges</p>
                            {
                                priceRanges.map((range,index) => (
                                    <CheckBox key={index} label={`${range}`}/>
                                ))
                            }
                        </div>
                        <div className="px-5 py-5">
                            <p className="font-medium text-gray-800 pb-2">Sort By</p>
                            {
                                sortOptions.map((option,index) => (
                                    <CheckBox key={index} label={option}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Rooms */}
                <div>
                    <div className="flex flex-col items-start text-left">
                        <h1 className="text-4xl mt-5 md:text-[40px]">Hotel Rooms</h1>
                        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                            Discover handpicked stays tailored to your comfort — compare prices, browse amenities, and find the perfect room for every occasion, from quick getaways to luxury escapes.
                        </p>
                    </div>
                    {rooms.map(room => (
                        <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0">
                            <img
                                onClick={() => navigate(`/rooms/${room._id}`)}
                                src={room.images[0]}
                                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                            />
                            <div className="md:w-1/2 flex flex-col gap-2">
                                <p className="text-gray-500">{room.hotel.city}</p>
                                <p onClick={() => navigate(`/rooms/${room._id}`)}className="text-gray-800 text-3xl cursor-pointer">{room.hotel.name}</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                                        <span>{room.starRating}</span>
                                    </div>
                                    <span>200+ reviews</span>
                                </div>
                                <div className="flex items-center text-gray-500 mt-2 text-sm">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-teal-600" />
                                    <span>{room.hotel.address}</span>
                                </div>
                                <p className="text-lg font-medium text-gray-700">
                                    <span className="text-red-950 text-2xl">${room.price}</span>/night
                                </p>
                                <div className="grid grid-cols-2 text-xs">
                                    <p>Free Wifi</p>
                                    <p>Minibar</p>
                                    <p>24 hour Room service</p>
                                    <p>Balcony View</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>        
            </div>
            <Footer />
        </>
    )
}

export default AllRooms
