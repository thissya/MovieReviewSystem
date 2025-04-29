import React from 'react'

function Signup() {
    return (
        <>
            <div className="w-full h-screen bg-slate-300">
                <div className='flex justify-center items-center h-full'>
                    <div className='w-[500px] h-[450px] rounded-lg shadow-lg border border-gray-200 bg-slate-200'>
                        <div className='p-4 m-4 font-bold text-3xl text-black text-center'>
                            SignUp
                        </div>
                        <form className='flex flex-col mx-16 justify-center '>
                            <input className='p-2 my-3  rounded-lg bg-gray-300 text-black' type='text' placeholder='UserName' />
                            <input className='p-2 my-3  rounded-lg bg-gray-300 text-black' type='email' placeholder='Email' />
                            <input className='p-2 my-3 rounded-lg bg-gray-300 text-black' type='password' placeholder='Password' />
                            <input className='p-2 my-3 rounded-lg bg-gray-300 text-black' type='password' placeholder='Confirm Password' />
                            <button className = 'p-2 my-3 bg-slate-400 rounded-lg text-black font-bold'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup