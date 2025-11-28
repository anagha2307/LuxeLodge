import React, { useState } from 'react'
import Navbar from '../../Components/admin/Navbar'
import AdminSideBar from '../../Components/admin/AdminSideBar'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })
  const [inputs, setInputs] = useState({
    roomType: '',
    price: 0,
    amenities: {
      'Free Wifi': 'false',
      'Free Breakfast': 'false',
      'Mountain View': 'false',
      'Pool access': 'false',
      'Room service': 'false',
    }
  })
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex h-full">
          <AdminSideBar />

          <form className="p-5 m-6">
            <div>
              <div className="flex flex-col items-start text-left">
                <h1 className="text-3xl mt-5 md:text-4xl">Add Room</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                  Provide essential information to help guests find the right stay. A well-structured listing improves bookings.
                </p>
              </div>
            </div>
            {/* Image Upload */}
            <p className="text-gray-800 my-6">Images</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:flex my-2">
              {
                Object.keys(images).map((key) => (
                  <label htmlFor={`roomImages${key}`} key={key}>
                    <img src={images[key] ? URL.createObjectURL(images[key]) : "https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_1280.png"} alt="upload fimage" className="max-h-13 cursor-pointer opacity-80" />
                    <input type="file" accept='image/*' hidden id={`roomImages${key}`} onChange={e => setImages({ ...images, [key]: e.target.files[0] })} />
                  </label>
                ))
              }
            </div>
            <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
              <div className="flexx-1 max-w-48">
                <p className="text-gray-800 mt-4">Room Type</p>
                <select onChange={e =>setInputs({...inputs,roomType:e.target.value}) } name="room" id="roomType" className="border border-gray-200 text-gray-600 opacity-70 mt-1 rounded p-2 w-full">
                    <option value="">Select Room Type</option>
                    <option value="">Single Bed</option>
                    <option value="">Double Bed</option>
                    <option value="">Luxury Room</option>
                    <option value="">Family Suite</option>

                </select>
              </div>
              <div className="flexx-1 max-w-48">
                <p className="text-gray-800 mt-4">Price Per Night</p>
                <input onChange={e =>setInputs({...inputs,price:e.target.value}) } value={inputs.price} className="border border-gray-200 text-gray-600 opacity-70 mt-1 rounded p-2 w-24"/>
              </div>
            </div>

          </form>
        </div>
      </div >

    </>
  )
}

export default AddRoom

