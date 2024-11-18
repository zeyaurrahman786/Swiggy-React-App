import React from 'react'
import { CgMail } from 'react-icons/cg'
import { CiUser } from 'react-icons/ci'
import { MdAddIcCall } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
 

const SideLoginPage = ({ loginTogle, setloginTogle ,switchs , setSwitchs , referal , SetReferal }) => {
    return (
        <div className='black-overlay h-full w-full fixed z-20 opacity-100 duration-500 top-0'
            style={{ opacity: loginTogle ? 1 : 0, visibility: loginTogle ? 'visible' : 'hidden' }}
            onClick={() => setloginTogle(false)}
        >
            <div className='w-[500px] h-full bg-white absolute flex flex-col items-center '
                style={{ right: loginTogle ? '0%' : '-100%' }}
                onClick={e => e.stopPropagation()}
            >
                <RxCross2 className='absolute right-10 mt-5 text-3xl cursor-pointer text-[#444]' onClick={() => setloginTogle(false)} />

                <div className='' style={{ visibility: switchs ? 'visible' : 'hidden' }}>
                    <div className='absolute top-16 left-[78px] '>
                        <h1 className=' text-3xl font-semibold text-gray-600'>Login</h1>
                        <sub className='text-[#ff5200] font-semibold text-[16px] cursor-pointer'
                            onClick={() => setSwitchs(false)}
                        ><span className='text-gray-700'>or</span> create an account</sub>
                    </div>
                    <div className='mt-44 flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[350px]'>
                        <CgMail className='text-2xl text-gray-500' />
                        <input className='outline-none w-full' type="email" placeholder='e:g email.....' />
                    </div>
                    <button className='bg-[#ff5200] text-[#fff] font-semibold w-32 rounded py-[6px] mt-8 '>Login</button>
                </div>


                <div className='' style={{ visibility: switchs ? 'hidden' : 'visible' }}>
                    <div className='absolute top-16 left-[78px] '>
                        <h1 className=' text-3xl font-semibold text-gray-600'>Sign Up</h1>
                        <sub className='text-[#ff5200] font-semibold text-[16px] cursor-pointer'
                            onClick={() => {
                                setSwitchs(true)
                                SetReferal(true)
                            }
                            }
                        ><span className='text-gray-700'>or</span> Login to your account</sub>
                    </div>
                    <div className='mt-[-130px] flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[350px]'>
                        <CiUser className='text-2xl text-gray-500' />
                        <input className='outline-none w-full' type="text" placeholder='e:g bhaneshvar.....' />
                    </div>
                    <div className='mt-5 flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[350px]'>
                        <CgMail className='text-2xl text-gray-500' />
                        <input className='outline-none w-full' type="email" placeholder='e:g email.....' />
                    </div>
                    <div className='mt-5 flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[350px]'>
                        <MdAddIcCall className='text-2xl text-gray-500' />
                        <input className='outline-none w-full' type="number" placeholder='e:g ph_number.....' />
                    </div>
                    <h1 className='text-gray-800 font-semibold mt-5 cursor-pointer' onClick={() => SetReferal(!referal)}>Have a refaral code?</h1>
                    <div className='mt-5 flex gap-2 items-center border py-3 rounded px-2 pr-8 w-[350px]'
                        style={{ visibility: referal ? 'hidden' : 'visible' }}
                    >
                        <MdAddIcCall className='text-2xl text-gray-500' />
                        <input className='outline-none w-full' type="number" placeholder='e:g Refferal.....' />
                    </div>
                    <button className='bg-[#ff5200] text-[#fff] font-semibold w-32 rounded py-[6px] mt-8 '>Continue</button>
                </div>



            </div>
        </div >
    )
}

export default SideLoginPage
