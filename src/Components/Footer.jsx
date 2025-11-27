import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <>
            <div className='text-gray-500/80 bg-sky-100 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 mt-20'>
                <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                    <div className='max-w-80'>
                        <div>
                            {/* Logo */}
                            <Link to={'/'} className="flex items-center">
                                <img src='logo.png' alt="logo" className='mb-4 h-10 w-10 md:h-15 md:w-15' />
                                <h1 className="text-2xl font-bold text-blue-900 mb-3">Luxe Lodge</h1>
                            </Link>
                        </div>
                        <p className='text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </p>
                        <div className='flex items-center gap-3 mt-4'>
                            {/* Instagram */}
                            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                            {/* Facebook */}
                            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                            {/* Twitter */}
                            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                            {/* LinkedIn */}
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                        </div>
                    </div>
                    <div>
                        <p className='text-lg text-gray-800'>COMPANY</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg text-gray-800'>SUPPORT</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Safety Information</a></li>
                            <li><a href="#">Cancellation Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                    <div className='max-w-80'>
                        <p className='text-lg text-gray-800'>STAY UPDATED</p>
                        <p className='mt-3 text-sm'>
                            Subscribe to our newsletter for inspiration and special offers.
                        </p>
                        <div className='flex items-center mt-4'>
                            <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                            <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                                <FontAwesomeIcon className="text-white" icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-300 mt-8' />
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                    <p>Built By Anagha Varghese <span className="p-2">© {new Date().getFullYear()} </span> All rights reserved.</p>
                    <ul className='flex items-center gap-4'>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer
