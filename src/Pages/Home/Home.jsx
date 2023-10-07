import React from 'react';
import Banner from './Banner';
import Services from './Services';
import EventRecord from './EventRecord';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl my-32 mx-auto px-3 md:px-7 lg:px-0'>
                <Services></Services>
            </div>
            <EventRecord></EventRecord>
        </div>
    );
};

export default Home;