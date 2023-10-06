import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;