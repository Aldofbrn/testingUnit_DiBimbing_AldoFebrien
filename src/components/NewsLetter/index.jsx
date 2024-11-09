import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Join the R.Cress Community!
          </h1>
          <p>
            Join our community and be the first to receive the latest news,
            trends, and special offers.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-lg text-black border border-tertiary "
              type="text"
              placeholder="Enter Email"
            />
            <button className="bg-tertiary w-[200px] rounded-lg text-white font-medium shadow-lg px-6 py-3 mx-auto my-6 md:ml-3 hover:bg-blue-700 transition-all duration-300">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className="text-primary">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
