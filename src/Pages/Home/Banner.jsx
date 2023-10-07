import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/SRCC8nY/banner.jpg')] bg-cover bg-center bg-no-repeat md:h-[120vh] mt-[-80px] flex justify-center items-center">
            <div className='w-3/5 md:w-3/4 lg:w-2/4 mx-au'>
                <h1 className='text-2xl pt-28 pb-20 md:pb-0 md:pt-0 md:text-7xl lg:text-8xl font-bold text-center uppercase text-white'>Launch your product here</h1>
            </div>

        </div>
    );
};

export default Banner;