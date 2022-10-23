import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import ErrorPage from '../src/components/ErrorPage';
import Profile from '../src/components/Profile';
import Wallet from '../src/components/Wallet';
import Main from './Layout/Main';
import router from '../src/Routes/Routes';


function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;
