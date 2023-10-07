import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUP/SingUp";
import ErrorPage from "../Pages/ErrorPage/Errorpage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/singin",
                element: <SingIn></SingIn>
            },
            {
                path: "/singup",
                element: <SingUp></SingUp>,
            },

        ]
    },
]);

export default router