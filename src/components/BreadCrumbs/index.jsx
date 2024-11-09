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
