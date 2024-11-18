import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdFilterListOff } from "react-icons/md";



const Filter = () => {
    return (
        <div className='filterSection'>
            <filter>
                <p>Filter</p>
                <MdFilterListOff />
            </filter>

            <filter>
                <p>Sort By </p>
                <IoIosArrowDown />
            </filter>
            <filter>
                <p>Rating 4.0 +</p>
            </filter>

            <filter>
                Pure-Veg
            </filter>
            <filter>
                Non-Veg
            </filter>

            <filter>
                Offers
            </filter>

            <filter>
                Less then ₹300
            </filter>
        </div>
    )
}

export default Filter
