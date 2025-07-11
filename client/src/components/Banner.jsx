import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-100 lg:pt-24 pt-16 '>
      <div className="relative max-w-7xl mx-auto md:rounded-2xl bg-cover bg-center h-[550px] md:h-[500px] " style={{backgroundImage: `url(/assets/banner.jpg)`,backgroundPosition:"top"} }>
        <div className="absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center ">
            <div className="text-center text-white px-4 ">
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
                    Discover Your Style
                </h1>
                <p className='text-lg md:text-xl mb-6' >
                    Shop The Latest Trend And Find Your Look
                </p>
                <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 '  >Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
