import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className='black-overlay h-full w-full fixed z-20 opacity-100 duration-500 top-0'
            style={{ opacity: search ? 1 : 0, visibility: search ? 'visible' : 'hidden' }}
            onClick={() => setSearch(false)}
        >
            <div className='w-[500px] h-[45px] bg-white absolute flex  items-center left-[50%] top-20 rounded overflow-hidden border border-orange-700'
                // style={{ right: search ? '0%' : '-100%' }}
                onClick={e => e.stopPropagation()}
            >
                <input type="text" placeholder='Search anything...' className=' w-full h-full outline-0 px-2 ' />
                <button className='bg-orange-700 text-white px-10 h-full'>Search</button>
            </div >
        </div >
    )
}

export default Search
