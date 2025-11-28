import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import { rooms } from '../assets/roomsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faHeart, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const ViewRoom = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImg, setmainImg] = useState(null)
    useEffect(() => {
        const room = rooms.find(room => room._id === id)
        room && setRoom(room)
        room && setmainImg(room.images[0])
    }, [])
    const amenities = ["Free Wifi", "Minibar", "Room service", "Balcony"]
    return room && (
        <>
            <Header />
            <div className="pt-20 md:pt-35 px-4 md:px-16 lg:px-24">
                {/* Room Details */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <h1 className="text-3xl md:text-4xl">
                        {room.hotel.name} <span className='text-sm'>({room.roomType})</span>
                    </h1>
                    <p className="text-xs py-1 px-3 text-white bg-orange-400 rounded-full">20% Off</p>
                </div>
                <p className="text-gray-500 text-xl my-2">{room.hotel.city}</p>
                <div className="flex items-center text-gray-500 mt-2 text-sm">
                    <FontAwesomeIcon icon={faLocationDot} className="text-teal-600" />
                    <span>{room.hotel.address}</span>
                </div>
                {/* Room price*/}
                <h1 className="text-2xl font-medium text-gray-700 my-2">
                    <span className="text-red-950 text-2xl">${room.price}</span>/night
                </h1>
                {/* Rating */}
                <div className="flex items gap-2 mt-2">
                    <div className='flex items-center text-orange-400 gap-1'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className='text-gray-400' icon={faStar} />
                    </div>
                    <p className="ml-2">200+ reviews</p>
                </div>
                {/* Images */}
                <div className="flex flex-col lg:flex-row mt-6 gap-2">
                    <div className="lg:w-1/2 w-full">
                        <img src={mainImg} alt="room image" className="w-full rounded-xl shadow-lg object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:w-1/2">
                        {
                            room.images.length > 1 &&
                            room.images.map((image, index) => (
                                <img onClick={() => setmainImg(image)} src={image} key={index} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImg === image && 'outline-3 outline-rose-300'}`} />
                            ))
                        }
                    </div>
                </div>
                {/* Room Highlights */}
                <div className="flex flex-col md:flex-row items-center md:justify-between  mt-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl">Experience Luxury Like Never Before </h1>
                        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                            {amenities.map((item, index) => (
                                <p key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-sm">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Hotel Booking Form */}
                <form className='flex flex-col md:flex-row items-start md:items-center justify-between md:gap-10 gap-4 bg-white text-gray-500 rounded-md shadow-xl border border-gray-200 p-6 mx-auto mt-10 max-w-5xl'>
                    <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-6">
                        <div className='flex flex-col'>
                            <label htmlFor="checkIn">Check in</label>
                            <input id="checkIn" type="date" placeholder='Check In' className="w-full rounded border border-gray-200 px-8 py-1.5 mt-1.5 outline-none" required />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="checkOut">Check out</label>
                            <input id="checkOut" type="date" placeholder='Check Out' className="w-full rounded border border-gray-200 px-8 py-1.5 mt-1.5 outline-none" required />
                        </div>
                        <div className='flex md:flex-col gap-2 md:items-center'>
                            <label htmlFor="guests">Guests</label>
                            <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 outline-none  max-w-20" placeholder="0" required />
                        </div>
                    </div>
                    <button type='submit' className='flex items-center justify-center gap-2 rounded-md bg-blue-500 py-3 px-6 mt-3 text-white my-auto cursor-pointer' >
                        Check Availability
                    </button>
                </form>
                {/* common specifications */}
                <div className="mt-25 space-y-4">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faHouse} />
                            <p className="font-bold text-xl">Clean & Safe Stay</p>
                        </div>
                        <p className="text-gray-500 text-md">A well maintained and hygienic space just for you</p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <p className="font-bold text-xl">Enhanced Cleaning</p>
                        </div>
                        <p className="text-gray-500 text-md">This host follows strict cleaning standards.</p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="font-bold text-xl">Excellent Location</p>
                        </div>
                        <p className="text-gray-500 text-md">90% of guests rated the location 5 stars.</p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faHeart} />
                            <p className="font-bold text-xl">Smooth Check In</p>
                        </div>
                        <p className="text-gray-500 text-md">100% of guests gave checked-in a 5 star  rating.</p>
                    </div>
                </div>
                <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500 text-md">
                    <p>Guests are kindly requested to maintain cleanliness, respect hotel property, and follow the general rules of stay. Please keep noise levels low, use amenities responsibly, and report any issues to the staff for timely assistance. Room availability and services may vary, so cooperating with check-in/check-out timings and hotel policies ensures a comfortable experience for everyone.</p>
                </div>
                {/* Owner Details */}
                <div className="flex flex-col items-start gap-4">
                    <div className='flex items-center gap-10'>
                        <img src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-instagram-bule-tick-insta-blue-star-vector-png-image_6695210.png" alt="owner" className='h-14 w-14 md:h-18 m:w-18 rounded-full' />
                        <div className=''>
                            <p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
                            <div className="flex items-center mt-1 gap-2">
                                <div className='flex items-center text-orange-400 gap-1'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='text-gray-400' icon={faStar} />
                                </div>
                                <p className="ml-2">200+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <button className="px-6 py-2 rounded text-white bg-blue-500 hover:bg-blue-400 transition-all cursor-pointer">Contact Now</button>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ViewRoom
