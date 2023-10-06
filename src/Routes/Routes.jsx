import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUP/SingUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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