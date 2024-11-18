import React from 'react'

const GoToKnowUs = () => {
    return (
        <div className=' '>
            <div className='max-w-[1200px] mx-auto flex flex-col gap-5 items-center justify-center mt-20 pt-10'>

                <div className='flex items-center gap-5 '>
                    <p className='w-20 h-[2px] bg-[#ff5200] mt-3'></p>
                    <h1 className='text-[#444] text-5xl font-bold'>Get to know us</h1>
                    <p className='h-[2px] w-20 bg-[#ff5200] mt-3'></p>
                </div>


                <div className='flex items-center gap-16 mt-20 mb-20'>
                    <div className='w-[60%] text-xl text-gray-700'>
                        <p>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.</p>

                        <p className='mt-5'>Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture.</p>
                    </div>
                    <div className='w-[400px] h-[300px]'>
                        <img className='w-[400px] duration-500 hover:scale-105' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoToKnowUs
