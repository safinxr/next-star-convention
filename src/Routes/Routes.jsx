import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import SeeMore from "../Pages/SeeMore/SeeMore";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";


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
                element:<PrivateRoute> <AboutUs></AboutUs> </PrivateRoute>,
            },
            {
                path: "/contactus",
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/seemore/:cardid",
                loader:()=>fetch('/services.json'),
                element: <PrivateRoute><SeeMore></SeeMore></PrivateRoute>
            },

        ]
    },
]);

export default router