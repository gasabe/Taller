import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Login from './pages/Login/screens/Login';
import Register from './pages/Login/screens/Register';
import NotFound from './pages/Errors/screens/NotFound';
import HomeComercio from './pages/HomeComercio/screens/Home';

const PublicRoutes = [
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home-taller', element: <HomeComercio /> },
      { path: '401', element: <NotFound status='401' /> },
      { path: '404', element: <NotFound status='404' /> },
      { path: '500', element: <NotFound status='500' /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
];

export default function Routes() {
  return useRoutes(PublicRoutes);
}
