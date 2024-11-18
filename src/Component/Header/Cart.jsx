import React from 'react'
import { RiArrowDownSFill } from "react-icons/ri";


const Cart = ({ cart, setCart }) => {
    return (
        <div className='black-overlay h-full w-full fixed z-20 opacity-100 duration-500 top-0'
            style={{ opacity: cart ? 1 : 0, visibility: cart ? 'visible' : 'hidden' }}
            onClick={() => setCart(false)}
        >
            <div className='w-[400px] h-[500px] bg-white absolute flex flex-col items-center right-20 rounded top-20 border-t-4 border-[#ff5200]'
                onClick={(e) => e.stopPropagation()}
            >
                <RiArrowDownSFill className='text-[#ff5200] text-3xl rotate-180 absolute font-bold top-[-22px] right-24' />
                <h1 className='text-[2.5rem] font-bold text-gray-600 mt-3'>Empty Cart</h1>
            </div>
        </div >
    )
}

export default Cart
