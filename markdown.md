# List of Libray yang digunakan:

1. Axios Library
2. React router Dom library
3. React icons library
4. Tailwind CSS

# List fitur yang di tampilkan:

1. Search Bar, pada di Folder userPage

```jsx
// 🌟Handling filter user function, line 81
const filteredUsers = users.filter((user) =>
  user.first_name.toLowerCase().includes(search.toLocaleLowerCase())
);

//Form untuk search Bar, line 104
<div className="mb-4 px-4">
  <input
    type="text"
    placeholder="Search by first name"
    value={search} // The value of the input is tied to searchQuery
    onChange={(e) => setSearch(e.target.value)} // Updates searchQuery on input change
    className="border border-gray-300 p-2 rounded w-full"
  />
</div>;

//implemented function di line 117
```

2. Fitur Dummy Delete, di folder userPage

```jsx
// Delete dummy function , line 40
const handleDelete = async (id) => {
  const token = localStorage.getItem('access_token');
  const config = {
    heeaders: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.delete(
      `https://reqres.in/api/users/${id}`,
      config
    );
    setDeleteSuccess('Data deleted');
    setDeleteError('');
    getUsersList();
  } catch (error) {
    setDeleteError(error.response.data.message);
    setDeleteSuccess('');
  }
};

//line 146
<button
  onClick={() => handleDelete(user.id)}
  className="bg-quarter px-4 py-1 rounded-lg text-white text-sm font-semibold hover:bg-red-600 transition-all duration-300"
>
  Remove this user
</button>;
```

3. BreadCrumbs, dalam folder component, di folder 'BreadCrumbs' , di implementasi di halaman home (line 14), usersPage (line 90), dan users-details (line 36)

```jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  console.log(pathnames);

  let breadCrumbPath = '';

  return (
    <div
      className="breadcrumbs text-center font-bold text-black text-2xl my-2
    "
    >
      {pathnames.length > 0 && (
        <Link to="/" className="hover:text-quarter">
          Home
        </Link>
      )}
      {pathnames.map((name, index) => {
        breadCrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span> / {name} </span>
        ) : (
          <span className="hover:text-quarter">
            {' '}
            / <Link to={breadCrumbPath}>{name}</Link>{' '}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
```
