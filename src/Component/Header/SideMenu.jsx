import React from 'react'
import { CgSearch } from 'react-icons/cg'
import { FaMapLocationDot } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'

const SideMenu = ({togle , setTogle}) => {
    return (
        <div className='black-overlay h-full w-full fixed opacity-100 duration-500 z-20 top-0'
            style={{ opacity: togle ? 1 : 0, visibility: togle ? 'visible' : 'hidden' }}
            onClick={() => setTogle(false)}
        >
            <div className='w-[500px] h-full bg-white absolute flex flex-col items-center'
                style={{ left: togle ? '0%' : '-100%' }}
                onClick={e => e.stopPropagation()}
            >
                <RxCross2 className='absolute right-10 mt-5 text-3xl cursor-pointer text-[#444]' onClick={() => setTogle(false)} />
                <div className='mt-20 flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[300px]'>
                    <CgSearch className='text-2xl text-gray-500' />
                    <input className='outline-none w-full' type="search" placeholder='Search for area , street name.....' />
                </div>

                <div className='locationSet mt-10 flex gap-4 items-center border py-3 rounded px-2 pr-8 w-[300px]  cursor-pointer'>
                    <FaMapLocationDot className='text-2xl text-gray-600' />
                    <div className='duration-500'>
                        <h2>Get current location</h2>
                        <p className='text-[12px] text-gray-500'>Using GPS</p>
                    </div>
                </div>

                <button className='bg-[#ff5200] text-[#fff] font-semibold w-32 rounded py-[6px] mt-8 ml-[168px]'>Explore</button>
            </div>
        </div>
    )
}

export default SideMenu
