import React from 'react'
import img from './assets/maaveeran.jpeg';

function Movie() {
    return (
        <div className='w-full h-screen'>
            <div className='w-[400px] h-full bg-black'>
                <div className='flex flex-col w-full items-center'>
                    <div className='m-8 w-[250px] h-[250px] border border-gray-300 '>
                        <img className='w-full h-full' src={img} alt='Vikram Vedha' />
                        <div className='text-center text-white font-bold text-xl'>
                            Maaveeran
                        </div>
                    </div>
                </div>
                <div className='w-full text-center my-10 font-bold text-white'>
                    Details
                </div>
                <div className='text-white mx-12'>
                    <div className=' text-sm font-bold' >
                        Director Name : Madone Ashwin
                    </div>
                    <div className='text-sm font-bold'>
                        Cast & Crew : SivaKarthikeyan , Arthi Sankar , Yogi Babu
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Movie