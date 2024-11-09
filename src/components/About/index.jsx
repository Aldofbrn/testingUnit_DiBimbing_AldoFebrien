import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-l from-tertiary to-secondary py-16 px-4"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={`public/images/undraw_engineering_team_a7n2.svg`}
          alt="discussion"
        />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold uppercase">
            About R.Cress: Innovation Unleashed
          </p>
          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl py-2">
            Bridging Ideas and Experiences
          </h1>
          <p className="text-white">
            R.Cress is dedicated to empowering individuals and businesses
            through innovative solutions. We prioritize flexibility and
            adaptability, ensuring our clients achieve their goals while
            navigating the ever-evolving landscape of learning and development.
          </p>
          <button className="bg-quarter w-[200px] rounded-xl text-white font-medium shadow-lg px-2 py-2 mx-auto my-6 hover:bg-red-900 transition-all duration-300">
            <Link to="/users-list">Discover more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
