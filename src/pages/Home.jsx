import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LandingPage from '../Components/LandingPage'
import HotelCard from '../Components/HotelCard'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Testimonials from '../Components/Testimonials'
import { rooms } from '../assets/roomsData'
const Home = () => {
    const navigate = useNavigate()
    const Offers = [
        {
            _id: 1,
            priceOff: "30% OFF",
            title: "Luxury Suite Deal",
            description: "Save big on deluxe suites with complimentary breakfast.",
            expiryDate: " Dec 30, 2025"
        },
        {
            _id: 2,
            priceOff: "20% OFF",
            title: "Early Bird Special",
            description: "Book 7 days in advance and enjoy exclusive savings.",
            expiryDate: " Jan 10, 2026"
        },
        {
            _id: 3,
            priceOff: "15% OFF",
            title: "Weekend Getaway",
            description: "Perfect for short stays with premium amenities.",
            expiryDate: " Dec 15, 2025"
        }
    ];
    return (
        <div className='w-full'>
            <Header/>
            <LandingPage />
            {/* Recommended section */}
            <section className="flex flex-col items-center margin-0 px-6 md:px-10 lg:px-16 bg-slate-100">
                <div className="flex flex-col md:justify-center  items-start md:items-center md:text-center mt-10">
                    <h1 className="text-3xl md:text-[30px] text-sky-900">Recommended Hotels</h1>
                    <p className="text-sm md:text-base text-justify text-gray-500/90 mt-2">From premium amenities to trusted reviews, these hotels are chosen to give you the best blend of style, value, and relaxation.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {
                        rooms.slice(0, 4).map((room, index) =>
                            <HotelCard key={room._id} room={room} index={index} />
                        )
                    }
                </div>
                <button onClick={() => { navigate('/rooms') }} className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">View all Hotels</button>
            </section>
            {/* Offers section */}
            <section className='flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30'>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div>
                        <h1 className="text-xl md:text-[40px] text-sky-900">Exclusive Offers</h1>
                        <p className="text-base text-gray-500/90 max-w-xl mt-2">Unlock exclusive deals that combine luxury, comfort, and smart savings for your next stay</p>
                    </div>
                    <button className="flex items-center gap-1 my-2 md:my-16 px-4 py-2 text-sm font-medium rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
                        <span>View Offers</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {
                        Offers.map((item) => (
                            <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repat bg-center bg-cover'
                                style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/decorative-background-home-office-hotel-modern-interior-design-living-room-texture-dark-blue-wall-focus-details-384108356.jpg)', height: '250px' }}>
                                <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded">{item.priceOff}</p>
                                <div>
                                    <p className="text-2xl font-medium">{item.title}</p>
                                    <p>{item.description}</p>
                                    <p className="text-xs text-white">Expires on
                                        {item.expiryDate}</p>
                                </div>
                                <button className="absolute mt-30 px-4 py-2 text-sm font-medium border border-gray-300 rounded text-white hover:bg-gray-50 hover:text-gray-500 transition-all cursor-pointer">View Offer</button>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* Testimonial section */}
            <Testimonials/>
            <Footer/>   
        </div>
    )
}
export default Home
