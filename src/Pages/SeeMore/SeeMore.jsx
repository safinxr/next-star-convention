import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SeeMore = () => {
    const data = useLoaderData()
    const { cardid } = useParams()
    const findData = data.find(singleData => singleData.id === cardid);
    const { id, services, image, price, description } = findData;
    return (
        <div className='max-w-7xl mx-auto px-3 md:px-7 lg:px-0 my-8 lg:my-16' >
            <div className='flex flex-col lg:flex-row '>
                <div>
                    <img className='rounded-xl w-full' src={image} alt="" />
                </div>
                <div className='flex-1 p-4'>
                    <h2 className='text-3xl md:text-5xl font-black uppercase mt-4 md:mt-6 lg:mt-0'>{services}</h2>
                    <div className="flex justify-between items-center py-4 md:py-6 lg:py-10">
                        <p className='text-xl  md:text-2xl font-bold text-gradient'>Price: {price}</p>
                        <Link to='contactus' className="text-base md:text-xl border border-[#04DDF1] px-4 py-1.5 rounded-md text-gradient uppercase hover:text-black">contact us</Link>
                    </div>
                </div>
            </div>
            <p className='text-base md:text-xl my-4 md:my-6 lg:my-10'>{description}</p>
        </div>
    );
};

export default SeeMore;