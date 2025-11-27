import React ,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 bg-transparent w-full flex items-center justify-between px-4 md:px-16 lg:px-24 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-sky-600 backdrop-blur-lg py-2 md:py-1 h-18" : "bg-grey-100 py-2 md:py-1"}`}>
            {/* Logo */}
            <Link to={'/'} className="flex items-center">
                <img src='logo.png' alt="logo" className="w-20 h-20" />
                <h1 className={`text-2xl font-bold ${isScrolled ? "text-sky-900" : "text-red-900"} `}>Luxe Lodge</h1>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex mx-20 items-center gap-4 lg:gap-10">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-blue-700" : "text-grey-500 text-lg"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-grey-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button className={`border px-4 text-grey-500 py-1 text-sm rounded-full cursor-pointer ${isScrolled ? 'text-sky-900' : 'border border-gray-300'} transition-all`}>
                    Dashboard
                </button>
            </div>
            {/* Desktop Right */}
            <div className="hidden md:flex items-center ">
                <FontAwesomeIcon icon={faUser} className={`text-black text-2xl ${isScrolled ? "text-white " : "text-blue-200"}`}/>
                <button className={`px-8 py-2.5 rounded-full transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black border border-gary-300"}`}>
                    Login
                </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <FontAwesomeIcon icon={faBarsStaggered} onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} />
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                {
                    navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">Dashboard</button>
                <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">Login</button>
            </div>
        </nav>
    );
}
export default Header