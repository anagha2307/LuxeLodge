import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
const HotelReg = () => {
    const cities = [
        "Maldives", "Thailand", "London", "Paris"
    ]
    return (
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex justify-center items-center bg-black/70">
                <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
                    <img src="https://media.cnn.com/api/v1/images/stellar/prod/171122165337-ultimate-india-hotels-wildflower-hall-shimla-in-the-himalayas-an-oberoi-resort.jpg?q=w_4500,h_3000,x_0,y_0,c_fill" alt="" className="w-1/2 rounded-xl hidden md:block" />
                    <div className="relative flex flex-col md:w-1/2 p-6 md:p-10">
                        <FontAwesomeIcon icon={faClose} className="absolute top-4 right-4 cursor-pointer" />
                        <p className="text-2xl tetx-center font-semibold mt-6">Register your Hotel</p>
                        <div className="w-full mt-4">
                            <label htmlFor="name" className='font-medium text-gray-500'>
                                <input type="text" placeholder='Hotel Name' className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required />
                            </label>
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="phone" className='font-medium text-gray-500'>
                                <input type="text" placeholder='Phone' className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required />
                            </label>
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="address" className='font-medium text-gray-500'>
                                <input type="text" placeholder='Address' className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required />
                            </label>
                        </div>
                        <div className="w-full mt-4 max-w-60 mr-auto">
                            <label htmlFor="city" className='font-medium text-gray-500'>City</label>
                            <select id='city' placeholder='Select city' className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 text-gray-400" required>
                                <option value="">Select City</option>
                                {
                                    cities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HotelReg
