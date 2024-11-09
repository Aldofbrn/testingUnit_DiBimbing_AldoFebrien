import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserPage from '../pages/UserPage';
import UsersDetail from '../pages/UserDetail';
import ProtectedRoute from './ProtectedRoute';

export const route = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/users-detail',
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/users-detail/:id',
    element: (
      <ProtectedRoute>
        <UsersDetail />
      </ProtectedRoute>
    ),
  },
];
