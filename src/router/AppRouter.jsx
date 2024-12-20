import { createBrowserRouter, Navigate } from "react-router-dom";
import { URLS } from "./URLS";
import GuestLayout from "../layouts/GuestLayout";
import HomePage from "../pages/HomePage";
import UserLayout from "../layouts/UserLayout";
import UserHomePage from "../pages/userPages/UserHomePage";
import NotFound from "../components/NotFound";
import BooksPage from "../pages/BooksPage";
import ContactPage from "../pages/ContuctPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SingleBookPage from "../pages/SingleBookPage";

const router = createBrowserRouter([
    {
        path: URLS.GUEST.DEFAULT,
        element: <GuestLayout />,
        errorElement:<NotFound />,
        children:[
            {
                path: URLS.GUEST.DEFAULT,
                element: <Navigate to={URLS.GUEST.HOME}/>
            },
            {
                path: URLS.GUEST.HOME,
                element: <HomePage/>
            },
            {
                path: URLS.GUEST.CONTACT,
                element: <ContactPage/>
            },
            {
                path: URLS.GUEST.BOOKS,
                element: <BooksPage/>
            },
            {
                path: URLS.GUEST.S_BOOKS,
                element: <SingleBookPage/>
            },
            {
                path: URLS.GUEST.SIGNUP,
                element: <SignUpPage/>
            },
            {
                path: URLS.GUEST.LOGIN,
                element: <LoginPage/>
            },
        ]
    },
    {
        path: URLS.USER.DEFAULT,
        element: <UserLayout />,
        errorElement:<NotFound />,
        children:[
            {
                path: URLS.USER.DEFAULT,
                element: <Navigate to={URLS.USER.HOME}/>
            },
            {
                path: URLS.USER.HOME,
                element: <UserHomePage/>
            },
        ]
    },
])

export default router;