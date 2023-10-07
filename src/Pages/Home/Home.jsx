import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main className='max-w-7xl my-32 mx-auto px-3 md:px-7 lg:px-0'>
                <Services></Services>
            </main>
        </div>
    );
};

export default Home;