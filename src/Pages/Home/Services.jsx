import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json() )
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <div className='flex justify-center mb-12 '>
                <h1 className='uppercase text-xl lg:text-3xl font-medium text-center text-gradient  border-2 border-[#04DDF1] p-4 rounded-md'>our services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service =><ServiceCard service={service} key={service.id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;