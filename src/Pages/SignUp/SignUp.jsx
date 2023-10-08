import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import upimg from '../../assets/SingUp.svg'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ContextAuth } from '../../Context/ContextData';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

const SignUp = () => {
    const provider = new GoogleAuthProvider();
    const [errorText, setErrorText] = useState('')
    const { emailPassSignUp, upProfile, googleSignIn } = useContext(ContextAuth)
    const navigate = useNavigate()


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
        setErrorText('')
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            return setErrorText('password is less than 6 characters')
        }
        if (!/[A-Z]/.test(password)) {
            return setErrorText("password don't have a capital letter")
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            return setErrorText("password don't have a special character")
        }
        emailPassSignUp(email, password)
            .then(res => {
                upProfile(name)
                    .then(() => {
                        notify("Congratulations! Your account has been successfully created")

                        setTimeout(function () {
                            navigate('/')
                        }, 1500);
                    }).catch((error) => {
                        setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
                    });




            })
            .catch(error => {
                setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
            })


    }

    const googleHandel = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/')

            }).catch((error) => {
               console.log("error:" + " " + error.message.split("/")[1].split(")"))
            });
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
                                className="input input-bordered input-info w-full  rounded-3xl" />
                            {
                                errorText && <>
                                    <p className='mt-1 ms-4 text-red-500 text-sm'>{errorText}</p>
                                </>
                            }
                            <button type='submit'
                                className='btn font-medium text-base  w-full mt-6  mb-4 rounded-3xl bg-[#407BFF] border-0 text-white hover:bg-[#3d6fdb] active:scale-95'
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
                                onClick={googleHandel}
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