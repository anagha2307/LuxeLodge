import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [openProfile, setOpenProfile] = useState(false)
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 py-1 shadow-md bg-white transition-all duration-300">
                <Link to={'/'} className="flex items-center">
                    <img src='logo.png' alt="logo" className="w-20 h-20" />
                    <h1 className="text-2xl font-bold text-sky-900">Luxe Lodge</h1>
                </Link>
                <div className="hidden md:flex items-center m-5">
                    <img src='https://www.shutterstock.com/image-illustration/admin-main-figure-technical-side-260nw-382414978.jpg' onClick={() => setOpenProfile(true)} className='w-10 h-10 rounded-full cursor-pointer' />
                    {/* modal for profile */}
                    {
                        openProfile && (
                            <>
                                <div onClick={() => setOpenProfile(false)} className="fixed inset-0 z-40"></div>
                                <div className="absolute top-25 right-30 z-50" >
                                    <div className="relative flex flex-col mx-auto bg-white shadow-md rounded md:w-[370px] w-[370px] border border-gray-200 p-6 gap-1">
                                        <div className="flex flex-col md:flex-row md:gap-3">
                                            <div className="flex items-center justify-start p-6 rounded-full">
                                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="admin-logo" className="w-10 h-10 rounded-full" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h2 className="text-gray-900 mt-4 text-md">Username</h2>
                                                <p className="text-sm text-gray-600 mt-2">admin@gmail.com</p>
                                            </div>
                                        </div>
                                        <hr className="border-gray-200 w-full mx-auto" />
                                        <div className="flex justify-start items-center gap-6 mt-4 cursor-pointer">
                                            <FontAwesomeIcon icon={faGear} className="text-gray-500" />
                                            <h2 class="text-gray-500 text-md">Manage Settings</h2>
                                        </div>
                                        <hr className="border-gray-200 w-full mx-auto" />
                                        <div className="flex justify-start items-center gap-6 mt-4 cursor-pointer">
                                            <FontAwesomeIcon icon={faPowerOff} className="text-gray-500" />
                                            <p className="text-gray-500 text-md">Logout</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="w-full py-2.5 font-medium text-sm text-white text-center bg-gradient-to-r 
            from-[#4F39F6] to-[#FDFEFF]">
                <p><span className="px-3 py-1 rounded-md text-indigo-600 bg-white mr-2">Welcome Admin</span>Let’s get things done! Monitor, update, and manage everything smoothly.</p>
            </div>
        </>
    )
}

export default Navbar
