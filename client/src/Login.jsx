import React from 'react';
import google from './assets/google.png';
import {Link} from 'react-router-dom'
import {useState} from 'react';

function Login() {
    const [role,setRole] = useState('');
    

    return (
        <div className="w-full h-screen bg-slate-300">
            <div className="flex justify-center items-center h-full">
                <div className="w-[450px] h-[400px] rounded-lg shadow-lg border border-gray-200 bg-slate-200">
                    <div className="p-2 my-4 font-bold text-3xl text-black text-center">
                        Login
                    </div>
                    <form className="flex flex-col mx-16 justify-center">
                        <input
                            className="p-2 my-3 rounded-lg bg-gray-300 text-black"
                            type="Email"
                            placeholder="Email"
                        />
                        <input
                            className="p-2 my-3 rounded-lg bg-gray-300 text-black"
                            type="password"
                            placeholder="Password"
                        />
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="p-2 my-3 rounded-lg bg-gray-300 text-black"
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button className="p-2 my-3 bg-slate-400 rounded-lg text-black font-bold">
                            Login
                        </button>
                    </form>
                    <div className="px-2 mx-14 my-2 text-sm flex text-black">
                        <p>Don't Have an Account ?</p>
                        <Link to='/signup' className='mx-1 hover:underline'>
                        <p>create one !</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
