import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 6,
    total: null,
    total_pages: null,
  });
  const [deleteSuccess, setDeleteSuccess] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [search, setSearch] = useState('');

  const getUsersList = () => {
    axios
      .get(
        `https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`
      )
      .then((res) => {
        // console.log(res);
        setUsers(res.data.data);
        setPagination({
          page: res.data.page,
          per_page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // // Delete dummy function
  // const handleDelete = async (id) => {
  //   const token = localStorage.getItem('access_token');
  //   const config = {
  //     heeaders: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   try {
  //     const response = await axios.delete(
  //       `https://reqres.in/api/users/${id}`,
  //       config
  //     );
  //     setDeleteSuccess('Data deleted');
  //     setDeleteError('');
  //     getUsersList();
  //   } catch (error) {
  //     setDeleteError(error.response.data.message);
  //     setDeleteSuccess('');
  //   }
  // };

  useEffect(() => {
    getUsersList();
  }, [pagination.page]);

  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  const handlePrev = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  // 🌟Handling filter user function
  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  // console.log(pagination);
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <div className="mb-4 text-center px-2 py-2  text-black">
        <h1 className="text-lg md:text-5xl font-bold mb-1">
          Welcome to Users List
        </h1>
        <p className="text-sm text-slate-600">
          Discover a versatile professional with expertise ranging from market
          insights and customer service to front-end development. With a
          background in technology, analytics, and communication strategy, I
          thrive on solving problems and driving innovation in dynamic
          environments.
        </p>
      </div>

      {/* 🌟Seacrh Bar */}
      <div className="mb-4 px-4">
        <input
          type="text"
          placeholder="Search by first name"
          value={search} // The value of the input is tied to searchQuery
          onChange={(e) => setSearch(e.target.value)} // Updates searchQuery on input change
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div>
        <div className="grid md:grid-cols-3">
          {filteredUsers.map((user) => {
            return (
              <div
                key={user.id}
                className="md:flex md:items-center  md:justify-center"
              >
                <div className=" flex px-2 items-center border-b-2 md:flex-col rounded-br-3xl hover:bg-secondary hover:scale-105 transition-all duration-300 hover:text-white md:border md:rounded-xl md:border-4 md:w-2/3 lg:justify-center gap-3 mb-6 border-tertiary">
                  <div className="w-full md:w-auto md:flex md:justify-center overflow-hidden rounded-full md:my-1">
                    <img
                      src={user.avatar}
                      className="w-full rounded-full transform hover:scale-125 transition-all duration-300"
                    />
                  </div>
                  <div className="md:text-center">
                    <h2 className="font-semibold text-lg">
                      {user.first_name} {user.last_name}
                    </h2>
                    <p className="font-semibold">{user.email}</p>
                    <p className="text-sm line-clamp-1 md:line-clamp-none">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi exercitationem quibusdam voluptates quis officia
                      error, tempora corporis velit amet illo.
                    </p>
                    <div className="py-2 flex gap-2 md:justify-center">
                      <Link to={`/users-detail/${user.id}`}>
                        <button className="bg-tertiary px-4 py-1 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-300">
                          Learn More
                        </button>
                      </Link>
                      <button
                        // onClick={() => handleDelete(user.id)}
                        className="bg-quarter px-4 py-1 rounded-lg text-white text-sm font-semibold hover:bg-red-600 transition-all duration-300"
                      >
                        Remove this user
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center py-4 ">
        <button
          disabled={pagination.page === 1}
          onClick={handlePrev}
          className={`bg-tertiary text-white px-4 py-1 rounded-lg hover:bg-blue-700 hover:font-semibold transition-all duration-300 ${
            pagination.page === 1 ? 'bg-gray-400' : ''
          }`}
        >
          Back
        </button>
        <p className="font-semibold">
          Page {pagination.page} of {pagination.total_pages}
        </p>
        <button
          disabled={pagination.page === pagination.total_pages}
          onClick={handleNext}
          className={`bg-tertiary text-white px-4 py-1 rounded-lg hover:bg-blue-700 hover:font-semibold transition-all duration-300 ${
            pagination.page === pagination.total_pages
              ? 'bg-gray-400'
              : 'text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserPage;
