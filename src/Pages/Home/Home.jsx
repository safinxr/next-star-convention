import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main className='max-w-7xl my-32 mx-auto'>
                <Services></Services>
            </main>
        </div>
    );
};

export default Home;