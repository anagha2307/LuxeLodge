import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import { rooms } from '../assets/roomsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ViewRoom = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImg, setmainImg] = useState(null)
    useEffect(() => {
        const room = rooms.find(room => room._id === id)
        room && setRoom(room)
        room && setmainImg(room.images[0])
    }, [])
    return room && (
        <>
            <Header />
            <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24">
                {/* Room Details */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <h1 className="text-3xl md:text-4xl">
                        {room.hotel.name} <span className='text-sm'>({room.roomType})</span>
                    </h1>
                    <p className="text-xs py-1 px-3 text-white bg-orange-400 rounded-full">20% Off</p>
                </div>
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
                        room.images.map((image,index) => (
                            <img onClick={() => setmainImg(image)} src={image} key={index} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImg === image && 'outline-3 outline-rose-300'}`} />
                        ))
                    }
                    </div>
                </div>


            </div>


            <Footer />
        </>
    )
}

export default ViewRoom
