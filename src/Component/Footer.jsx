import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#F0F0F5] py-5'>
            <div className='max-w-[1100px] mx-auto'>
                <div className='flex gap-10 items-center mt-5'>
                    <h1 className='font-bold text-3xl text-[#02060cbf]'>For better experience,download the Swiggy app now</h1>
                    <div className='flex items-center gap-2'>
                        <img className='w-36 h-12 cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                        <img className='w-36 h-12 cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
                    </div>
                </div>


                <div className='flex items-center justify-between mt-16'>
                    <div className=''>
                        <img className='w-44' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Swiggy_Logo_2024.webp/1143px-Swiggy_Logo_2024.webp.png" alt="" />
                        <p>© 2024 Swiggy Limited</p>
                    </div>

                    <ul className='footer flex gap-16 '>
                        <li>
                            <h1 className='font-bold mb-2 text-xl'>Company</h1>
                            <p>About US</p>
                            <p>Sweggy Corporate</p>
                            <p>Careers</p>
                            <p>Team</p>
                            <p>Sweggy One</p>
                        </li>
                        <li>
                            <h1 className='font-bold mb-2 text-xl'>Contact us</h1>
                            <p>Help & Support</p>
                            <p>Partner With Us</p>
                            <p>Rate With Us</p>
                        </li>
                        <li>
                            <h1 className='font-bold mb-2 text-xl'>Available in:</h1>
                            <p>Bangluru</p>
                            <p>Indore</p>
                            <p>Pune</p>
                            <p>Nagpur</p>
                            <p>Delhi</p>
                            <p>Mumbai</p>
                        </li>
                        <li>
                            <h1 className='font-bold mb-2 text-xl'>Life at Swiggy</h1>
                            <p>Sweggy News</p>
                            <p>Explore With Sweggy</p>


                            <div className='mt-16'>
                                <h1 className='font-bold mb-2 text-xl'>Life at Swiggy</h1>
                                <div className='flex gap-2 '>
                                    <FaLinkedin className='text-[20px] text-[#666] duration-500 cursor-pointer hover:text-[#333]' />
                                    <FaFacebook  className='text-[20px] text-[#666] duration-500 cursor-pointer hover:text-[#333]'/>
                                    <FaInstagram className='text-[20px] text-[#666] duration-500 cursor-pointer hover:text-[#333]' />
                                    <FaPinterest  className='text-[20px] text-[#666] duration-500 cursor-pointer hover:text-[#333]'/>
                                    <FaSquareXTwitter className='text-[20px] text-[#666] duration-500 cursor-pointer hover:text-[#333]' />
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
