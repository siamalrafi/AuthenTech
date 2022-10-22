import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import ErrorPage from '../src/components/ErrorPage';
import Profile from '../src/components/Profile';
import Wallet from '../src/components/Wallet';
import Main from './Layout/Main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/wallet',
        element:<Wallet></Wallet>
      }
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;
