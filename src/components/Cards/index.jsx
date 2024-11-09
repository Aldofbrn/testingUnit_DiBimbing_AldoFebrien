import React from 'react';

const Cards = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-primary to-tertiary py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto text-center mb-8">
        <h1 className="md:text-5xl sm:text-3xl text-xl font-bold text-white py-4">
          Choose Your Access Level🌟
        </h1>
        <p className="text-white font-semibold">
          Single, double, or triple user subscriptions available for full access
          to R.Cress facilities. Pick the plan that suits your needs and unlock
          premium features! 😄
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 border rounded-lg bg-secondary text-white">
          <img
            className="w-20 mx-auto "
            src={`public/images/single.png`}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] border border-tertiary rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 transition-all duration-300">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 hover:scale-105 duration-300 border rounded-lg bg-quarter text-white">
          <img
            className="w-20 mx-auto "
            src={`public/images/double.png`}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double Users</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] border-4 border border-tertiary rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 transition-all duration-300">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 border rounded-lg bg-secondary text-white">
          <img
            className="w-20 mx-auto "
            src={`public/images/triple.png`}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple Users</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] border border-tertiary rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 transition-all duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
