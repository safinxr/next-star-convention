import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUP/SingUp";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import SeeMore from "../Pages/SeeMore/SeeMore";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";


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
                path: "/aboutus",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/contactus",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/singin",
                element: <SingIn></SingIn>
            },
            {
                path: "/singup",
                element: <SingUp></SingUp>,
            },
            {
                path: "/seemore/:cardid",
                loader:()=>fetch('/services.json'),
                element: <SeeMore></SeeMore>
            },

        ]
    },
]);

export default router