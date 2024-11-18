import React, { useState } from 'react';

const Help = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="font-nunito antialiased bg-gray-100 text-gray-900 my-16 flex items-center justify-center pt-10">
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="main-title mb-8">
                    <h1 className="font-bold text-2xl text-center text-[#ff5200]">How can we help you?</h1>
                </div>

                <div className="main-search mb-8 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
                    <button className="focus:outline-none">
                        <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <input type="text" placeholder="Describe your issue" className="text-base w-full bg-transparent focus:outline-none" />
                </div>

                <div className="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
                    {["Popular articles", "Fix problems & request removals", "Browse the web", "Search on your phone or tablet"].map((title, index) => (
                        <div className="item px-6 py-6" key={index}>
                            <p  className="flex items-center justify-between" onClick={(e) => { e.preventDefault(); toggleItem(index); }}>
                                <h4 className={openItems[index] ? 'text-[#ff5200] font-bold' : ''}>{title}</h4>
                                <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </p>
                            {openItems[index] && (
                                <div className="mt-3 text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="main-images mb-8">
                    <div className="images grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg", label: "Customer support" },
                            { src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a", label: "Send message" },
                            { src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3", label: "Write feedback" },
                        ].map((image, index) => (
                            <div className="image bg-white rounded-lg shadow-lg overflow-hidden" key={index}>
                                <p >
                                    <img src={image.src} alt={image.label} title={image.label} />
                                    <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">{image.label}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
