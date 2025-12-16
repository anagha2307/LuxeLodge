import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
            <Header />
            <section>
                <div className="relative w-full h-96 mt-26">
                    <img src="https://i.pinimg.com/1200x/25/5d/4a/255d4aca1549c872021ab2815c8bf78b.jpg" alt="contact image" className='absolute h-96 object-cover object-center w-full' />
                    <div className="absolute inset-0 h-full w-full bg-black/20"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="font-semibold text-white mb-4 text-3xl lg:text-4xl">Contact Information</h2>
                        <p className="text-xl text-white mb-9 opacity-70 text-center mx-10">We’re here to help you with bookings, support, and general inquiries.
                            Reach out through any of the channels below — our team usually responds within a few minutes</p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>

                    <form className="grid grid-cols-1 gap-5">
                        <div>
                            <label className="block mb-2 text-gray-700">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded border border-gray-400 outline-none focus:ring-3 focus:ring-blue-300" placeholder="Enter your name"/>
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-700">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type your message..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
                    </form>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default Contact
