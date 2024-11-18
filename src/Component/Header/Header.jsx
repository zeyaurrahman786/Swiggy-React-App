import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { TbShoppingBag } from "react-icons/tb";
import { CgSearch } from "react-icons/cg";
import { BiSolidOffer } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import SideMenu from './SideMenu';
import SideLoginPage from './SideLoginPage';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Search from './Search';



const Header = () => {

    let [togle, setTogle] = useState(false);
    let [loginTogle, setloginTogle] = useState(false);
    let [cart, setCart] = useState(false);
    let [switchs, setSwitchs] = useState(true);
    let [referal, SetReferal] = useState(true);
    let [search, setSearch] = useState(false);


    function SetTogleFn() {
        setTogle(true);
    }
    return (
        <>
            {/*  Menu side */}
            <SideMenu togle={togle} setTogle={setTogle} />

            {/* Login  */}
            <SideLoginPage
                loginTogle={loginTogle}
                setloginTogle={setloginTogle}
                switchs={switchs}
                setSwitchs={setSwitchs}
                referal={referal} SetReferal={SetReferal}
            />


            {/* Cart */}
            <Cart cart={cart} setCart={setCart} />


            {/* Search bar */}
            <Search search={search} setSearch={setSearch} />





            <div className='w-full shadow-lg fixed z-10 bg-white top-0'>
                <div className=' max-w-[1250px] mx-auto   flex items-center justify-between '>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img className='w-[80px]' src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png" alt="" />
                        </Link>
                        <div className='flex items-center gap-2 cursor-pointer duration-500 hover:text-[#ff5200]' onClick={() => SetTogleFn()}>
                            <p className=' border-b-2 border-black  hover:border-[#ff5200] font-semibold'>Other</p>
                            <FaChevronDown className='text-[#ff5200] inline  '
                            />
                        </div>
                    </div>
                    <nav className='flex gap-8 items-center '>

                        <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '>
                            <TbShoppingBag className='text-xl' />
                            <Link to='/corporate'>
                                <p>Swiggy Corporate</p>
                            </Link>
                        </div>

                        <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '
                            onClick={() => setSearch(true)}
                        >
                            <CgSearch className='text-xl' />
                            <p>Search</p>
                        </div>

                        <Link to='/offer' className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '>
                            <BiSolidOffer className='text-xl' />
                            <p>Offers</p>
                            <sup className='text-[#ff5200]'>New</sup>
                        </Link>

                        <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '>
                            <Link to='help'>
                                <p>Help</p>
                            </Link>
                        </div>

                        <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '
                            onClick={() => setloginTogle(true)}
                        >
                            <CiUser className='text-xl' />
                            <p >Sign In</p>
                        </div>

                        <div className='text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer '
                            onClick={() => setCart(true)}

                        >
                            <BsCart2 className='text-xl' />
                            <p>Cart</p>
                            <sup className='text-[#ff5200]'>0</sup>
                        </div>



                    </nav>
                </div>
            </div >
        </>

    )
}

export default Header
