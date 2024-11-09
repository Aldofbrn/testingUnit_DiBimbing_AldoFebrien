import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiAerialSignal } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('access_token')
  );
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <>
      <nav className="bg-gradient-to-r from-tertiary to-secondary shadow-lg">
        {/* Logo */}
        <div className=" flex mx-auto max-w-[1240px] px-4 justify-between items-center py-6">
          <div className="text-2xl gap-2 flex items-center font-bold">
            <GiAerialSignal size={30} color="white" />
            <h1 className="text-white text-3xl font-bold">
              <span className="text-primary">R</span>.Cress
            </h1>
          </div>
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="p-4 font-semibold hover:text-red-500 text-white">
                Home
              </li>
            </Link>
            <Link to="/">
              <li className="p-4 font-semibold hover:text-red-500 text-white">
                About
              </li>
            </Link>
            <li className="p-4 font-semibold hover:text-red-500 text-white">
              {' '}
              Newsletter
            </li>
            <Link to="/users-detail">
              <li className="p-4 font-semibold hover:text-red-500 text-white">
                Users List
              </li>
            </Link>
            {isLoggedIn ? (
              <Link to="/">
                <li className="p-3">
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 ml-24 text-white font-semibold bg-quarter rounded-lg hover:bg-red-900 transition-all duration-300"
                  >
                    LogOut
                  </button>
                </li>
              </Link>
            ) : (
              <Link to={'/login'}>
                <li className="p-4">
                  <button className="px-3 py-1 ml-24 text-white font-semibold bg-tertiary rounded-lg hover:bg-blue-900 transition-all duration-300">
                    LogIn
                  </button>
                </li>
              </Link>
            )}
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={`fixed top-0 left-0 w-[60%] h-full bg-gradient-to-tl from-tertiary to-secondary ease-in-out duration-300 transform ${
              nav ? 'translate-x-0' : '-translate-x-full'
            } border-l border-l-tertiary z-20`}
          >
            <div className="text-2xl gap-2 flex items-center font-bold m-4">
              <GiAerialSignal color="white" size={30} />
              <p className="text-white text-3xl font-bold">
                <span className="text-primary">R</span>.Cress
              </p>
            </div>
            <ul className="uppercase p-4 text-white font-semibold">
              <Link to="/">
                <li className="p-4 border-b border-gray-600">Home</li>
              </Link>
              <Link to="/">
                <li className="p-4 border-b border-gray-600"> About</li>
              </Link>
              <li className="p-4 border-b border-gray-600"> Newsletter</li>
              <Link to="/users-detail">
                <li className="p-4 border-b border-gray-600">Users Detail</li>
              </Link>
              {isLoggedIn ? (
                <Link to="/">
                  <li className="p-4">
                    <button
                      onClick={handleLogout}
                      className="px-2 py-2 bg-quarter rounded-lg hover:bg-red-900 transition-all duration-300"
                    >
                      LogOut
                    </button>
                  </li>
                </Link>
              ) : (
                <Link to={'/login'}>
                  <li className="p-4">
                    <button className="px-2 py-2 bg-tertiary rounded-lg hover:bg-blue-900 transition-all duration-300">
                      LogIn
                    </button>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
