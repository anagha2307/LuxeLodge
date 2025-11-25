import React from 'react'
import { Link } from 'react-router-dom'
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HotelCard = ({ room, index }) => {
    return (
        <>
            <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id}
             className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gay-500/90 shadow-md ">
                <img src={room.images} alt="image"/>
                {
                    index % 2 === 0 &&
                    <p className="absolute px-3 py-1 top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">Best Seller</p>
                }
                <div className="p-4 pt-5">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-medium text-gray-800">{room.hotel.name}</p>
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faStar} className='text-orange-500' />
                            <span className='text-sm'>{room.starRating}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{room.hotel.address}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p><span className="text-xl text-gray-800">${room.price}</span>/night</p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-300 transition-all cursor-pointer">Book Now</button>
                </div>
            </Link>
        </>
    )
}
export default HotelCard
