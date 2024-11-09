import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center">
        <p className="text-primary font-bold p-2 uppercase">
          Empowering Connectivity, Redefining Excellence
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Unlock possibilities with R.Cress{' '}
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-3">
            Fast,flexible learning for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-quarter"
            strings={[
              'Everyone',
              'Professionals',
              'Success',
              'Growth',
              'Tomorrow',
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="mt-4 md:text-xl text-lg font-semibold text-slate-600">
          R.Cress is dedicated to enhancing your online journey with innovative
          solutions, seamless connectivity, and unparalleled support. Let’s
          shape tomorrow together.
        </p>
        <Link to="/users-list">
          <button className="bg-tertiary w-[200px] rounded-xl text-white shadow-lg font-medium px-2 py-2 mx-auto my-6 hover:bg-blue-700 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
