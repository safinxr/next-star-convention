import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SeeMore = () => {
    const data = useLoaderData()
    const { cardid } = useParams()
    const findData = data.find(singleData => singleData.id === cardid);
    const { id, services, image, price, description } = findData;
    return (
        <div className='max-w-7xl mx-auto my-16' >
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <img className='rounded-xl w-full' src={image} alt="" />
                </div>
                <div className='flex-1 p-4'>
                    <h2 className='text-6xl font-black '>{services}</h2>
                    <div className="flex justify-between items-center py-10">
                        <p className='text-2xl font-bold text-gradient'>Price: {price}</p>
                        <Link className="text-xl border border-[#04DDF1] px-4 py-1.5 rounded-md text-gradient uppercase hover:text-black">More details</Link>
                    </div>
                </div>
            </div>
            <p className='text-xl my-10'>{description}</p>
        </div>
    );
};

export default SeeMore;