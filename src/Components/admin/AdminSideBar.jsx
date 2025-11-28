import { faGear, faHouseChimney, faIdBadge, faList, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <>
            <div className="md:w-64 w-full md:h-full h-56 text-base bg-indigo-100 py-8 flex flex-col gap-y-6 transition-all duration-300">
                <Link to={'/admin-dashboard'} className="flex justify-center items-center gap-6 cursor-pointer">
                    <FontAwesomeIcon icon={faHouseChimney} className="text-gray-900 text-xl" />
                    <h2 class="text-gray-500 text-md">Dashboard</h2>
                </Link>
                <Link to={'/admin-add-room'} className="flex justify-center items-center gap-6 cursor-pointer">
                    <FontAwesomeIcon icon={faSquarePlus} className="text-gray-900 text-xl" />
                    <h2 class="text-gray-500 text-md">Add Room</h2>
                </Link>
                <Link to={'/admin-room-list'} className="flex justify-center items-center gap-6 cursor-pointer">
                    <FontAwesomeIcon icon={faList} className="text-gray-900 text-xl" />
                    <h2 class="text-gray-500 text-md">List Room</h2>
                </Link>
            </div>
        </>
    )
}
export default AdminSideBar
