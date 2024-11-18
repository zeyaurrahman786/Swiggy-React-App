import React, { useContext } from 'react'
import Context from './Context'

const BestPlace = () => {
    let { LocateData } = useContext(Context);
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-[#222] font-bold text-[24px] my-5'>Best Places to Eat Across Cities</h1>
            <div className='flex gap-4 gap-y-0 flex-wrap '>
                {
                    LocateData.map((e) => {
                        return (
                            <div className='border border-[#888] w-[280px] py-4 flex items-center justify-center rounded-[6px] mt-5 cursor-pointer mb-3'>
                                <p className='font-semibold text-[#333] text-[12pxt]'>{e.city}</p>

                            </div>
                        )
                    })
                }
            </div>

            <h1 className='text-[#222] font-bold text-[24px] my-5 mt-16'>Best Cuisines Near Me!</h1>
            <div className='flex gap-4 gap-y-0  flex-wrap '>
                {
                    LocateData.map((e) => {
                        return (
                            <div className='border border-[#888] w-[280px] py-4 flex items-center justify-center rounded-[6px] mt-5 cursor-pointer mb-3'>
                                <p className='font-semibold text-[#333] text-[12pxt]'>{e.city}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestPlace
