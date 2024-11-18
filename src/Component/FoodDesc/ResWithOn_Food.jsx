import React, { useContext } from 'react'
import Context from '../Context';
import { MdStars } from 'react-icons/md';
import Filter from '../Filter';
import { useNavigate } from 'react-router-dom';

const ResWithOn_Food = () => {
    const { recipiesData } = useContext(Context);


    let navigate = useNavigate();
    function clickHandler(id) {
        navigate(`/cart/${id}`);
    }

    return (
        <div className='max-w-[1200px] mx-auto px-3 mt-10'>

            <div className='flex items-center justify-between mb-5'>
                <h2 className='text-2xl font-bold'>Restaurants with online food delivery in Chhindwara

                </h2>

            </div>

            <Filter />

            <div className='flex gap-6 flex-wrap mt-10 mb-10'>
                {
                    recipiesData.map((ele, id) => (
                        <div key={id} className='flex flex-col  w-[275px] shrink-0 duration-500 cursor-pointer'
                            onClick={() => clickHandler(id)}
                        >
                            <div className='overlay h-[185px] w-[273px] rounded-xl overflow-hidden relative '>
                                <img className=' h-full w-full object-cover duration-500 hover:scale-110' src={ele.image} alt={ele.name} />
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


            <hr className='bg-gray-300 p-[.5px] my-20 ' />

        </div >
    )
}

export default ResWithOn_Food
