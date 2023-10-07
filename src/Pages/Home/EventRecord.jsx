import React from 'react';

const EventRecord = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/3fVYsCv/new.jpg')] bg-cover bg-center bg-hero bg-no-repeat my-24 bg-black bg-blend-overlay bg-opacity-[0.85]">
            <div className='py-28 max-w-7xl mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-10 px-3 md:px-7 lg:px-0'>
                <div className='text-center'>
                    <h4 className='text-5xl lg:text-6xl font-bold mb-6'>210</h4>
                    <hr className='w-12 border mx-auto' />
                    <h4 className='text-xl lg:text-2xl font-bold mt-6'>EVENTS ORGANIZED</h4>
                </div>
                <div className='text-center'>
                    <h4 className='text-5xl lg:text-6xl font-bold mb-6'>1570</h4>
                    <hr className='w-12 border mx-auto' />
                    <h4 className='text-xl lg:text-2xl font-bold mt-6'>ACTIVE USERS</h4>
                </div>
                <div className='text-center'>
                    <h4 className='text-5xl lg:text-6xl font-bold mb-6'>11</h4>
                    <hr className='w-12 border mx-auto' />
                    <h4 className='text-xl lg:text-2xl font-bold mt-6 uppercase'>upcoming event</h4>
                </div>
            </div>
        </div>
    );
};

export default EventRecord;