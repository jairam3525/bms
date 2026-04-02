import React, { useState } from 'react'
import mainLogo from '../../assets/main-icon.png'
import { FaSearch } from "react-icons/fa";
import { useLocation } from '../../context/LocationContext.jsx';
import { Link, useNavigate } from "react-router-dom";
import map from '../../assets/pin.gif'

const Header = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate(); // ✅ FIXED

    const { location, loading, error } = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className='w-full bg-white text-sm'>

            {/* Top bar */}
            <div className='px-4 md:px-8'>
                <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3'>

                    {/* LEFT */}
                    <div className='flex items-center space-x-4'>
                        <img src={mainLogo} alt="logo" className='h-8 cursor-pointer' />

                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Search for Movies..."
                                value={search}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSearch(value);

                                    if (value.trim() !== "") {
                                        navigate(`/movies?search=${value}`);
                                    }
                                }}
                                className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none"
                            />
                            <FaSearch className='absolute right-2 top-2.5 text-gray-500' />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center space-x-6">

                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <img src={map} alt="location" className="h-6 w-6" />
                            {loading && <span>Loading...</span>}
                            {location && <span>{location}</span>}
                            {error && <span>Location unavailable</span>}
                        </div>

                        {/* Auth */}
                        <div className="flex items-center space-x-3">
                            {user ? (
                                <>
                                    <span>{user.name}</span>
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("user");
                                            window.location.reload();
                                        }}
                                        className="bg-gray-200 px-3 py-1 rounded"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="bg-red-500 text-white px-4 py-1 rounded">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="border px-4 py-1 rounded">
                                        Signup
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="bg-gray-100 px-4 md:px-8">
                <div className="max-w-screen-xl mx-auto flex space-x-6 py-2">
                    <Link to="/" className="hover:text-red-500">Home</Link>
                    <Link to="/movies" className="hover:text-red-500">Movies</Link>
                    <span className="cursor-pointer hover:text-red-500">Stream</span>
                        <span className="cursor-pointer hover:text-red-500">Events</span>
                        <span className="cursor-pointer hover:text-red-500">Plays</span>
                        <span className="cursor-pointer hover:text-red-500">Sports</span>
                        <span className="cursor-pointer hover:text-red-500">Activities</span>

                </div>
            </div>

        </div>
    )
}

export default Header;