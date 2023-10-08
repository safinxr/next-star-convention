import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const notify = (x) => toast.success(x, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const formSubmit = e => {
        e.preventDefault()
        notify("message sent successfully")
        e.target.reset();
    }

    return (
        <div className='bg-gradient-to-r from-[#8B7ECC] to-[#ABA4F2] py-16'>
            <div className='max-w-4xl mx-auto px-3 md:px-7 lg:px-0 '>
                <div className='flex shadow-3xl'>
                    <div className='hidden flex-1 text-white text-center bg-gradient-to-r from-first-color to-third-color p-10  md:flex flex-col justify-center rounded-s-xl'>
                        <h2 className='text-4xl font-bold'>Let's Chat</h2>
                        <p className='mt-8 leading-7'>At NEXTSTAR CONVENTION, we value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you in any way we can. Please feel free to get in touch with us using the following contact information:</p>

                    </div>
                    <div className='flex-1 bg-white p-10 rounded-e-xl rounded-s-xl md:rounded-s-none'>
                        <h2 className='font-bold text-4xl text-center mb-6'>Contact</h2>
                        <form onSubmit={formSubmit} className='flex flex-col items-center'>
                            <input
                                required
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-info w-full max-w-xs mb-4" />
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="input input-bordered input-info w-full max-w-xs mb-6" />
                            <input
                                required
                                type="text"
                                placeholder="Company Name"
                                className="input input-bordered input-info w-full max-w-xs mb-6" />
                            <textarea
                                className='input input-bordered input-info w-full h-40 max-w-xs mb-6'
                                placeholder="Type here your message"
                                cols="30"
                                rows="5">
                            </textarea>
                            <button type='submit' className='px-8 py-2 border border-first-color rounded-lg hover:bg-gradient-to-r from-first-color to-third-color hover:text-white'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default ContactUs;