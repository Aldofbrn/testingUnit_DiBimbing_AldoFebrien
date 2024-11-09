import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payLoad = {
      email: email,
      password: password,
    };
    axios
      .post('https://reqres.in/api/login', payLoad)
      .then((res) => {
        console.log(res);
        const token = res?.data?.token;
        localStorage.setItem('access_token', token);
        setLogin(true);
        setError(false);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen text-white bg-tertiary">
        <div
          className="bg-secondary flex flex-col mx-8 px-8 py-8 rounded-lg shadow-2xl
        "
        >
          {login && <p className="font-bold text-center">LOGIN SUCCESS 😃</p>}
          {error && <p className="font-bold text-center">{error} 😭</p>}
          <h1 className="text-lg md:text-2xl font-semibold md:font-bold md:text-3xl mb-2">
            🌟Welcome to Login Page🌟
          </h1>
          <p className="text-center">Please enter your Email</p>
          <input
            type="text"
            placeholder="Your Email"
            onChange={handleChangeEmail}
            className="rounded-xl px-2 py-2 mb-4 text-gray-800"
          />
          <p className="text-center">Please enter your password</p>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Your Password"
            onChange={handleChangePassword}
            required
            className="rounded-xl px-2 py-2 mb-4 text-gray-800"
          />

          {/* Checkbox to toggle password visibility */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)} // Toggle the state
              className="mr-2"
            />
            <label htmlFor="show-password" className="text-sm">
              Show Password
            </label>
          </div>

          <button
            onClick={handleLogin}
            className="px-2 py-4 bg-tertiary rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 mb-4 shadow-xl"
          >
            Login
          </button>
          <p className="text-center">
            Not Registered?
            <Link to="/register">
              <span className="hover:font-semibold transition-all duration-300 pl-1">
                Click Here
              </span>
            </Link>
          </p>
          <p className="text-center mb-4">Or Login with</p>
          <div className="flex gap-4 items-center justify-center">
            <button className="flex text-xs md:text-lg items-center gap-1 md:gap-2 px-2 py-3 bg-tertiary rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-xl">
              Register with{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </button>
            <button className="flex text-xs md:text-lg items-center gap-1 md:gap-2 px-2 py-3 bg-tertiary rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-xl">
              Register with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </button>
          </div>
          <div className="mt-4 flex flex-col text-center t0xt-md font-light">
            <p>Visit homepage without Register? </p>
            <p className="hover:text-primary transition-all duration-300">
              {' '}
              <Link to="/">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
