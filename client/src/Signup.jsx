import React from 'react'
import { Link } from 'react-router-dom';
import google from './assets/google.png';

function Signup() {
    
    return (
        <>
            <div className="w-full h-screen bg-slate-300">
                <div className='flex justify-center items-center h-full'>
                    <div className='w-[450px] h-[400px] rounded-lg shadow-lg border border-gray-200 bg-slate-200'>
                        <div className='p-2 my-4 font-bold text-3xl text-black text-center'>
                            Sign Up
                        </div>
                        <form className='flex flex-col mx-16 justify-center '>
                            <input className='p-2 my-3  rounded-lg bg-gray-300 text-black' type='text' placeholder='UserName' />
                            <input className='p-2 my-3  rounded-lg bg-gray-300 text-black' type='Email' placeholder='Email' />
                            <input className='p-2 my-3 rounded-lg bg-gray-300 text-black' type='password' placeholder='Password' />
                           

                            <button className='p-2 my-3 bg-slate-400 rounded-lg text-black font-bold'>SignUp</button>
                        </form>
                        <div className='px-2 mx-14 my-2 text-sm flex text-black'>
                            <p> Already Have An Account ? </p>
                            <Link to='/login'>
                                <p className='mx-2 hover:underline'>Login</p>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup