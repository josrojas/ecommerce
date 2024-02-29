import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

import Home from "../views/home"
import Error404 from "../views/Error404"
import Cart from "../views/Cart"
import Profile from "../views/Profile"
import Procesador from "../views/Procesador"
import Grafica from "../views/Grafica"
import Ram from "../views/Ram"
import Mobo from "../views/Motherboard"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/profile',
        element: <Profile />,
        errorElement: <Error404 />
    },
    {
        path: '/cart',
        element: <Cart />,
        errorElement: <Error404 />
    },
    {
        path: '/procesador',
        element: <Procesador />,
        errorElement: <Error404 />
    },
    {
        path: '/grafica',
        element: <Grafica />,
        errorElement: <Error404 />
    },
    {
        path: '/ram',
        element: <Ram />,
        errorElement: <Error404 />
    },
    {
        path: '/motherboard',
        element: <Mobo />,
        errorElement: <Error404 />
    }
]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes;