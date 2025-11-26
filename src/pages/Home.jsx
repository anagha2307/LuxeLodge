import React from 'react'
import Header from '../Components/Header'
import LandingPage from '../Components/LandingPage'
import HotelCard from '../Components/HotelCard'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
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
    const Testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'John Doe',
            email: 'johnDoe@gmail.com',
            review: 'Booking was quick and effortless, and I loved how transparent the pricing was. The stay turned out even better than I expected'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            email: 'avery@gmail.com',
            review: 'I discovered deals I wouldn’t have found anywhere else online. The entire experience felt reliable and super convenient.'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            email: 'jordan@gmail.com',
            review: 'The interface was easy to navigate and details were clear and honest. I’m definitely planning to use this for future bookings.'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Alex Jeffrey',
            email: 'alexjeffrey@gmail.com',
            review: 'The platform made everything smooth—from searching rooms to final confirmation. It saved me time and gave me total peace of mind.'
        },
    ];
    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5 fill-blue-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.email}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">{card.review}</p>
        </div>
    );
    return (
        <div className='w-full'>
            <Header />
            <LandingPage />
            {/* Recommended section */}
            <section className="flex flex-col items-center margin-0 px-6 md:px-10 lg:px-16 bg-slate-50">
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
            <section className="flex flex-col items-center my-6 px-6 md:px-16 lg:px-20 bg-slate-50">
                <div className="flex flex-col md:justify-center  items-start md:items-center md:text-center mt-10">
                    <h1 className="text-3xl md:text-[30px] text-sky-900">What Our Guests Say</h1>
                    <p className="text-sm md:text-base text-justify text-gray-500/90 mt-2">Authentic reviews that reflect trust, satisfaction, and memorable moments</p>
                </div>
                <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite;
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
                `}</style>
                {/* Testimonial marquee Card */}            
                <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                        {[...Testimonials, ...Testimonials].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                </div>

            </section>
            <Footer/>
        </div>

    )
}
export default Home
