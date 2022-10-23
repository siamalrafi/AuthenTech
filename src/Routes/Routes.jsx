import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/profile',
                element:
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
            },
            {
                path: '/wallet',
                element:
                    <PrivateRoutes>
                        <Wallet />
                    </PrivateRoutes>
            }
        ]
    }
]);

export default router;