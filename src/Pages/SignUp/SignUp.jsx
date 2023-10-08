import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import upimg from '../../assets/SingUp.svg'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ContextAuth } from '../../Context/ContextData';

const SignUp = () => {
    const {emailPassSignUp} = useContext(ContextAuth)


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
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        emailPassSignUp(email, password)
        .then(res=>{
            notify("Congratulations! Your account has been successfully created")
            console.log(res.user);
        })
        .catch(error=>{
            notify(error)
            console.log(error);
        })
        

    }


    return (
        <div className='py-16'>
            <div className='max-w-4xl mx-auto px-3 md:px-7 lg:px-0 md:shadow-2xl rounded-xl'>
                <div className='flex shadow-3xl'>
                    <div className='hidden flex-1 text-center  md:flex flex-col justify-center rounded-s-xl py-10'>
                        <img src={upimg} alt="" />

                    </div>
                    <div className='flex-1 py-10 rounded-e-xl rounded-s-xl md:rounded-s-none bg-gradient-to-r from-first-color to-third-color'>
                        <h2 className='font-bold text-3xl text-center mb-6'>Signup</h2>
                        <form onSubmit={formSubmit} className='mx-auto max-w-xs'>
                            <input
                                required
                                name='name'
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-info w-full  mb-6 rounded-3xl" />
                            <input
                                required
                                name='email'
                                type="email"
                                placeholder="Email"
                                className="input input-bordered input-info w-full  mb-6 rounded-3xl" />
                            <input
                                required
                                name='password'
                                type="password"
                                placeholder="Password"
                                className="input input-bordered input-info w-full  mb-6 rounded-3xl" />

                            <button type='submit'
                                className='btn font-medium text-base  w-full mb-4 rounded-3xl bg-[#407BFF] border-0 text-white hover:bg-[#3d6fdb] active:scale-95'
                            >Sign up</button>

                            <p className='ms-2 text-start'>Already have an account? <Link className='text-primary' to='/Signin'>Sign in</Link>
                            </p>




                        </form>
                        <div className='my-4 flex justify-center items-center'>
                            <div className='border w-20 me-4'></div>
                            <p className='text-white'>OR</p>
                            <div className='border w-20 ms-4'></div>
                        </div>
                        <div className='mx-auto max-w-xs'>
                            <button
                                className='btn bg-transparent font-medium text-base  w-full mb-6 rounded-3xl  border-2 border-[#407BFF] text-[#407BFF]
                                hover:bg-[#407BFF] hover:text-white hover:border-0 active:scale-95'
                            >Sign up with <FcGoogle className='text-2xl'></FcGoogle></button>
                        </div>


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
    )
};

export default SignUp;