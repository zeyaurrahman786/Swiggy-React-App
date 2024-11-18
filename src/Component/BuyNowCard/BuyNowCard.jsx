import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../Context';
import { MdStars } from 'react-icons/md';
import PopUp from './PopUp';

const BuyNowCard = () => {
    let { id } = useParams();
    let { recipiesData } = useContext(Context);
    let newData = recipiesData.filter((val, ind) => ind.toString() === id);


    let [popup, setPopup] = useState(false);

    return (
        <div className="mt-28 flex items-center justify-center">
            {newData.map((val, id) => (
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{val.title}</h1>
                    <div className="mt-5 overflow-hidden">
                        <img
                            className="ml-2 w-[450px] h-64 object-cover rounded duration-500 hover:scale-105"
                            src={val.image}
                            alt={val.title}
                        />
                    </div>

                    {/* <div className="flex items-center justify-center gap-2 mt-4">
                        <MdStars className="text-green-800 text-2xl" />
                        <p className="font-semibold text-gray-600">{val.rating}</p>
                        <p className="text-gray-600 ml-5 font-semibold">{val.time}</p>
                    </div> */}
                    <p className='mt-2'>Explore a world of flavors food, where every meal brings a taste of diverse cuisines to your table. From comforting classics to exotic dishes, we cater to every craving and occasion!</p>

                    <h2 className="text-lg font-medium text-gray-700 mt-2">{val.type}</h2>

                    <div className="mt-4">
                        <p className="text-xl font-bold text-gray-800">Price ${val.price}</p>
                        <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500 transition duration-300"
                            onClick={() => {
                                setPopup(true)
                                type = 'add', payload = id
                            }}

                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}

            {/* Pop Up  */}
            <PopUp popup={popup} setPopup={setPopup} />

        </div>

    );

};

export default BuyNowCard;
