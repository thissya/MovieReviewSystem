import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
        role,
      });

      const token = res.data.token;

      // Save token to localStorage (or cookie if needed)
      localStorage.setItem('token', token);

      alert('Login successful');

      // Redirect based on role or go to dashboard
      if (role === 'admin') {
        navigate('/movie');
      } else {
        navigate('/movie');
      }

    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="flex justify-center items-center h-full">
        <div className="w-[450px] h-[400px] rounded-lg shadow-lg border border-gray-200 bg-slate-200">
          <div className="p-2 my-4 font-bold text-3xl text-black text-center">
            Login
          </div>
          <form className="flex flex-col mx-16 justify-center" onSubmit={handleLogin}>
            <input
              className="p-2 my-3 rounded-lg bg-gray-300 text-black"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="p-2 my-3 rounded-lg bg-gray-300 text-black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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

            <button type="submit" className="p-2 my-3 bg-slate-400 rounded-lg text-black font-bold">
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
