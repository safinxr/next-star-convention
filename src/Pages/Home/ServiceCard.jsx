import React from 'react';
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    const seeMore =(id)=>{
        navigate(`/seemore/${id}`)
    }

    const { id, services, image, price, description } = service;
    return (
        <div className=" bg-base-100 border-2 border-[#04DDF1] rounded-xl ">
            <figure><img className='rounded-t-xl' src={image}alt="Shoes" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title">{services}</h2>
                <p>{description.slice(0, 110)} <span onClick={()=>seeMore(id)}>...see more</span></p>
                <div className="card-actions justify-end items-center mt-2">
                    <p className='text-xl font-bold text-gradient'>Price: {price}</p>
                    <button onClick={()=>seeMore(id)} className="border border-[#04DDF1] px-4 py-1.5 rounded-md text-gradient uppercase hover:text-black">More details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;