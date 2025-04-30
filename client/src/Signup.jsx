import React from 'react'
import {Link} from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="w-full h-screen bg-slate-300">
                <div className='flex justify-center items-center h-full'>
                    <div className='w-[450px] h-[550px] rounded-lg shadow-lg border border-gray-200 bg-slate-200'>
                        <div className='p-2 my-4 font-bold text-3xl text-black text-center'>
                            SignUp
                        </div>
                        <form className='flex flex-col mx-16 justify-center '>
                            <input className='p-2 my-3  rounded-lg bg-gray-300 text-black' type='text' placeholder='UserName' />
                            <input className='p-2 my-3  rounded-lg bg-gray-300 text-black' type='email' placeholder='Email' />
                            <input className='p-2 my-3 rounded-lg bg-gray-300 text-black' type='password' placeholder='Password' />
                            <input className='p-2 my-3 rounded-lg bg-gray-300 text-black' type='password' placeholder='Confirm Password' />
                            <button className = 'p-2 my-3 bg-slate-400 rounded-lg text-black font-bold'>Sign Up</button>
                        </form>
                        <div className='px-2 mx-14 text-sm flex text-gray-400'>
                            <p> Already Have an Account ? </p>
                            <Link to='/login'>
                                <p className='px-1 mx-1 text-gray-400 underline hover:text-black'>login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup