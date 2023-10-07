import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const stars = <>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>


    </>
    return (
        <div className='my-28 '>
            <div className='flex justify-center mb-12 '>
                <h1 className='uppercase text-xl lg:text-3xl font-medium text-center text-gradient  border-2 border-[#04DDF1] p-4 rounded-md'>client
                    reviews</h1>
            </div>
            <div className='mx-4 lg:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16'>
                <div className='border-2 relative border-[#04DDF1]  rounded-2xl p-6 ph bg-white hover:bg-gradient-to-r from-first-color to-third-color hover:text-white duration-300'>
                    <p className='mb-12 text-justify line-clamp-5'>I cannot express how delighted I am with the incredible job this event management company did for our product launch. From the early planning stages to the final execution, they displayed unparalleled professionalism and creativity. The attention to detail in event design and lighting was exceptional. Our product launch was a massive success, and we owe it all to their expertise. Highly recommended
                    </p>
                    <div className='pb-4'>
                        <p className='text-center pb-2 flex justify-center items-center'>Jane D.
                            <span className='text-warning ms-4 flex'>
                                {stars}
                            </span>
                        </p>
                        <img img className=' rounded-full absolute inset-0 flex  justify-center top-56 mx-auto w-20 border-2 border-[#04DDF1] shadow-2xl' src="https://i.ibb.co/nDK2pkw/rv-1.png" alt="" />
                    </div>
                </div>



                <div className='border-2 relative border-[#04DDF1]  rounded-2xl p-6 ph bg-white hover:bg-gradient-to-r from-first-color to-third-color hover:text-white duration-300'>
                    <p className='mb-12 text-justify line-clamp-5'>Working with this event management company was an absolute pleasure. Their team was attentive, responsive, and dedicated to making our product launch event flawless. The virtual room styling with lights projections was a showstopper! They understood our brand vision and transformed it into a captivating experience. I'm beyond impressed and will definitely hire them again for our future events.
                    </p>
                    <div className='pb-4'>
                    <p className='text-center pb-2 flex justify-center items-center'>Jhakir K.
                            <span className='text-warning ms-4 flex'>
                                {stars}
                            </span>
                        </p>
                        <img img className=' rounded-full absolute inset-0 flex  justify-center top-56 mx-auto w-20 border-2 border-[#04DDF1] shadow-2xl' src="https://i.ibb.co/GFLcWWd/rv-2.jpg" alt="" />
                    </div>
                </div>



                <div className='border-2 relative border-[#04DDF1]  rounded-2xl p-6 ph bg-white hover:bg-gradient-to-r from-first-color to-third-color hover:text-white duration-300'>
                    <p className='mb-12 text-justify line-clamp-5'>
                        I cannot thank this event management company enough for their outstanding services during our recent product launch event. The live webcasting and video conferencing were seamless, allowing us to connect with our global audience effortlessly. Their attention to detail in multimedia content and set design was remarkable. Our event had a lasting impact on our audience, and we owe it to this incredible team. Highly recommend their services!

                    </p>
                    <div className='pb-4'>
                    <p className='text-center pb-2 flex justify-center items-center'>Mike F.
                            <span className='text-warning ms-4 flex'>
                                {stars}
                            </span>
                        </p>
                        <img img className=' rounded-full absolute  inset-0 flex  justify-center top-56 mx-auto w-20 border-2 border-[#04DDF1] shadow-2xl ' src="https://i.ibb.co/5n31bgn/rv-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;