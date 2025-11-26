import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot ,faCalendar, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
    const cities = [
        "New York", "Los Angeles", "London"
    ]
    return (
        <div className="flex flex-col items-start justify-center px-6 md:px-16 text-white
            bg-[url('https://media.istockphoto.com/id/2110310187/photo/luxury-tropical-pool-villa-at-dusk.jpg?s=612x612&w=0&k=20&c=r8UTpMnbLWD_DOKHAcu6dw-MJEcGg0CTqt0ICa84D84=')] bg-cover bg-center bg-no-repeat w-full h-screen">
            <p className="bg-blue-400 px-3 5 py-1 rounded-full mt-20">The Ultimate Hotel Experience</p>
            <h1 className="text-2xl md:text-5xl font-bold md:font-extrabold max-w-xl mt-4">Your Stay, Just a Click Away</h1>
            <h1 className="text-sm md:text-base max-w-130 mt-2">Bringing comfort and convenience together by offering curated stays, honest reviews, and quick bookings for stress-free travel planning.</h1>
            {/* Hotel Booking Form */}
            <form className='bg-white text-gray-500 rounded-lg px-5 py-5 mt-8 flex flex-col md:flex-row 
            flex-wrap max-md:items-center gap-4'>
                <div>
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <label htmlFor="destinationInput">Destination</label>
                    </div>
                    <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                    <datalist id='destinations'>
                        {
                            cities.map((city,index) => (
                                <option value={city} key={index}></option>
                            ))
                        }
                    </datalist>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 
                    py-1.5 mt-1.5 text-sm outline-none" />
                </div>
                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">Guests</label>
                    <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0"/>
                </div>
                <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-5 mt-3 text-white my-auto cursor-pointer max-md:py-1' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>Search</span>
                </button>
            </form>
        </div>
    )
}

export default LandingPage
