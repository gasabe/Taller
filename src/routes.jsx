import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Login from './pages/Login/screens/Login';
import NotFound from './pages/Errors/screens/NotFound';
import HomeComercio from './pages/HomeComercio/screens/Home';

const PublicRoutes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      { path: 'home-comercio', element: <HomeComercio /> },
      { path: '401', element: <NotFound status='401' /> },
      { path: '404', element: <NotFound status='404' /> },
      { path: '500', element: <NotFound status='500' /> },
      { path: '*', element: <NotFound status='404' /> },
    ],
  },
];

export default function Routes() {
  return useRoutes(PublicRoutes);
}
