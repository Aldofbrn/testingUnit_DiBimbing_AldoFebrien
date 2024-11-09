import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import BreadCrumbs from '../../components/BreadCrumbs';

const UsersDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div className="bg-gradient-to-bl from-secondary to-tertiary h-screen">
      <Navbar />
      <BreadCrumbs />
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center my-8">
          <h1 className="md:text-5xl font-bold mb-2 text-white">
            Welcome to User Detail
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ea
            aperiam pariatur totam dolore! Ut, quae nesciunt officia praesentium
            voluptatem voluptas, velit quos non provident maxime laborum
            doloribus fugiat quod sapiente ab dignissimos nostrum eius eaque?
            Pariatur cum aperiam eveniet officia illum aspernatur. Sed quasi
            aperiam eligendi, repudiandae nobis fuga!
          </p>
        </div>
        <div className="flex items-center justify-center my-16 h-[50vh] ">
          <div className="flex flex-col gap-3 items-center w-72 md:w-96 md:px-4 py-2 border border-4 md:border-4 rounded-lg border-primary relative ">
            <div className="overflow-hidden">
              <img
                src={user.avatar}
                className="hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="text-center text-white">
              <p>ID Number: {user.id}</p>
              <h1 className="font-bold md:text-xl">
                Hello! 😄 I'm {user.first_name} {user.last_name}
              </h1>
              <p>But you can call me {user.first_name} 😉</p>
              <p className="font-semibold py-2">{user.email}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                labore magni illo veritatis, voluptates possimus ipsam nam et
                autem cumque!
              </p>
              <button className="px-2 py-1 mt-4  bg-tertiary text-white font-semibold rounded-md text-center hover:bg-blue-700 transition-all duration-300">
                Follow Me +
              </button>
            </div>
            <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebookSquare size={30} className="hover:text-quarter" />
              <FaInstagram size={30} className="hover:text-blue-700" />
              <FaTwitterSquare size={30} className="hover:text-quarter" />
              <FaGithubSquare size={30} className="hover:text-blue-700" />
              <FaDribbbleSquare size={30} className="hover:text-quarter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
