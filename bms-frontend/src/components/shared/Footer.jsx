import React from 'react'
import mainLogo from '../../assets/main-icon-white.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#2b2b2b] text-gray-400 text-sm">

            <div className="border-t border-gray-600 w-full">

                <div className="flex flex-col items-center py-6">

                    {/* Logo */}
                    <img
                        src={mainLogo}
                        alt="BookMyScreen Logo"
                        className="w-28 mb-4"
                    />

                    {/* Social Icons */}
                    <div className="flex space-x-4">

                        <FaFacebookF className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />

                        <FaTwitter className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />

                        <FaInstagram className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />

                        <FaYoutube className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />

                        <FaPinterestP className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />

                        <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />

                    </div>

                </div>
                {/* Copyright */}
                <div className="text-center text-xs text-gray-400 px-4 max-w-4xl mx-auto mt-4">

                    <p>
                        Copyright 2025 © bookMyScreen Pvt Ltd. Ltd. All Rights Reserved.
                        <br />
                    </p>

                    <small>
                        The content and images used on this site are copyright protected and copyrights vests with the respective owners.
                        The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
                    </small>

                </div>

            </div>

        </footer>
    )
}

export default Footer