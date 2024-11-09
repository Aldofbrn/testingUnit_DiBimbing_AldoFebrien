import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Clear any previous errors when trying to submit a new form
    setError('');
    // Basic validation
    if (!form.email || !form.password) {
      setError('Email and password are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email');
      return;
    }
    axios
      .post('https://reqres.in/api/register', form)
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        setError(
          err.response.data.error ||
            'An error occurred. Please try again later.'
        );
      });
  };
  return (
    <div>
      <div>
        <div className="bg-tertiary flex items-center justify-center w-full h-screen">
          <div className="flex flex-col md:flex-row  rounded-xl mx-8 md:mx-48 overflow-hidden md:h-2/3">
            <img
              src={`public/images/pexels-junior-teixeira-1064069-2047905.jpg`}
              className="object-cover h-48 md:h-full md:w-1/2"
            />
            <div className="bg-secondary container flex flex-col justify-center items-center gap-2 py-4 px-4 overflow-hidden h-full  text-white">
              <h1 className="font-bold text-xl">🌟 Welcome to R-Cress! 🌟</h1>
              <p className="text-white text-bold text-center text-sm">
                Explore our dummy website showcasing the power of API
                integration in React. Dive in to see how seamless data fetching
                and dynamic content creation can enhance your web experience! 🚀
              </p>
              <div className="text-center w-full">
                {error && (
                  <p className="text-xl font-semibold mb-2">{error} 😭</p>
                )}
                <form>
                  <p>Please enter your email </p>
                  <input
                    className="py-2 px-2 rounded-xl mb-4 w-full text-black"
                    type="text"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <p>Please enter your password </p>
                  <input
                    className="py-2 px-2 rounded-xl mb-4 w-full text-black"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                  />
                </form>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-tertiary rounded-xl font-semibold text-white hover:bg-blue-700 transition-all duration-300 mb-4"
                >
                  Register
                </button>
                <p>Already have account?</p>
                <Link to="/login">
                  <span className=" text-xl font-semibold hover:font-bold ease-in-out transition-all duration-300">
                    Click here
                  </span>
                </Link>
              </div>
              <div>
                <p className="text-center mb-4">Or Register with</p>
                <div className="flex gap-4 items-center justify-between">
                  <button className="flex items-center gap-2 px-2 py-3 bg-tertiary rounded-xl hover:bg-blue-700 transition-all duration-300">
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
                  <button className="flex items-center gap-2 px-2 py-3 bg-tertiary rounded-xl hover:bg-blue-700 transition-all duration-300">
                    Register with{' '}
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
        </div>
      </div>
    </div>
  );
};

export default Register;
