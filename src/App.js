import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import ErrorPage from '../src/components/ErrorPage'
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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
