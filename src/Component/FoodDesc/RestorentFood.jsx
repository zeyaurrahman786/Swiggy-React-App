import React, { useContext, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import Context from '../Context';
import { MdStars } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const RestorentFood = () => {

    const { recipiesData } = useContext(Context);
    let [slide, setSlide] = useState(0);
    let navigate = useNavigate();


    function incrSlide() {
        if (recipiesData.length - 5 == slide) return false;
        setSlide(slide + 5);
    }


    function decrSlide() {
        if (slide == 0) return false;
        setSlide(slide - 5);
    }

    function clickHandler(id) {
        navigate(`/cart/${id}`);
    }


    return (
        <div className='max-w-[1200px] mx-auto mt-5 px-3'>

            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Top restaurant chains in Chhindwara
                </h2>
                <div className='flex items-center gap-2 '>
                    <div className='flex items-center justify-between bg-[#02060c26] rounded-full p-[10px] cursor-pointer' onClick={() => decrSlide()}><FaArrowLeft /></div>
                    <div className='flex items-center justify-between bg-[#02060c26] rounded-full p-[10px] cursor-pointer' onClick={() => incrSlide()}><FaArrowRight /></div>
                </div>
            </div>


            <div className='flex gap-8 overflow-hidden mt-10 mb-10'>
                {
                    recipiesData.map((ele, ind) => (
                        <div key={ind} className='flex flex-col  w-[275px] shrink-0 duration-500 cursor-pointer'
                            style={{ transform: `translateX(${slide * -150}px)` }}
                            onClick={() => clickHandler(ind)}
                        >
                            <div className='overlay h-[185px] w-[273px] rounded-xl overflow-hidden relative '>
                                <img className='h-full w-full object-cover duration-500 hover:scale-110' src={ele.image} alt={ele.name} />
                                <p className='z-999 absolute bottom-2 text-2xl font-bold text-white ml-2'>{ele.name}</p>
                            </div>

                            <h1 className='font-bold text-xl text-black mt-5'>{ele.title}</h1>

                            <div className='flex items-center gap-2'>
                                <MdStars className='text-green-700 text-xl ' />
                                <p className='font-semibold text-gray-700'>{ele.time}</p>
                            </div>

                            <h1 className='text-gray-700 font-semibold'>{ele.type}</h1>
                        </div>
                    ))
                }
            </div>

            <hr className='bg-gray-300 p-[.5px] my-16 ' />


        </div >
    )
}

export default RestorentFood
