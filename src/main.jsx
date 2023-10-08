import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Root from './components/root/Root';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './components/provider/AuthProvider';
import Details from './components/details/Details';
import Career from './components/career/Career';
import AboutUs from './components/aboutus/AboutUs';
import PrivateRoute from './components/privateroute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/career",
        element: <PrivateRoute><Career></Career></PrivateRoute>,
      },
      {
        path: "/aboutus",
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute> ,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
