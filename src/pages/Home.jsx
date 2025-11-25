import React from 'react'
import Header from '../Components/Header'
import LandingPage from '../Components/LandingPage'
import HotelCard from '../Components/HotelCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const rooms = [
        {
            _id: "1",
            images: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
            price: 120,
            starRating: 4.9,
            hotel: {
                name: "Grand Palace Hotel",
                address: "Kochi, Kerala"
            }
        },
        {
            _id: "2",
            images: "https://gos3.ibcdn.com/289eebc9-d104-46af-b279-a238416c6543.JPEG",
            price: 95,
            starRating: 4.6,
            hotel: {
                name: "Seaside Retreat",
                address: "Goa, India"
            }
        },
        {
            _id: "3",
            images: "https://t4.ftcdn.net/jpg/06/32/20/07/360_F_632200724_WuOGPlu1XfDjqUinsBGzHXaa8TVtdqD9.jpg",
            price: 150,
            starRating: 4.9,
            hotel: {
                name: "Mountain View Resort",
                address: "Manali, Himachal Pradesh"
            }
        },
        {
            _id: "4",
            images: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
            price: 80,
            starRating: 4.5,
            hotel: {
                name: "City Comfort Inn",
                address: "Bangalore, Karnataka"
            }
        }
    ];
    return (
        <>
            <Header />
            <LandingPage />
            {/* Recommended section */}
            <section className="flex flex-col items-center margin-0 px-6 md:px-16 lg:px-20 bg-slate-50">
                <div className="flex flex-col justify-center items-center text-center mt-10">
                    <h1 className="text-3xl md:text-[40px] text-sky-900">Recommended Hotels</h1>
                    <p className="text-sm md:text-base text-gray-500/90 mt-2">From premium amenities to trusted reviews, these hotels are chosen to give you the best blend of style, value, and relaxation.</p>
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
            <section>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="flex flex-col m-20">
                        <h1 className="text-2xl md:text-[40px] text-sky-900">Exclusive Offers</h1>
                        <p className="text-base text-gray-500/90 mt-2">From premium amenities to trusted reviews, these hotels are chosen to give you the best blend of style, value, and relaxation.</p>
                    </div>
                    <button className="my-16 px-4 py-2 text-sm font-medium rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">View all Hotels</button>

                </div>

            </section>

            {/* Testimonial section */}

        </>

    )
}
export default Home
