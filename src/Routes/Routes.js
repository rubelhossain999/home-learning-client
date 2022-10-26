import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from '../Auth/ForgotPassword';
import Login from '../Auth/Login';
import Registration from '../Auth/Registration';
import Blog from '../Pages/Blog/Blog';
import CourseSideBar from '../Pages/Courses/CourseSideBar';
import Error from '../Pages/Error/Error';
import FAQ from '../Pages/FAQ/FAQ';
import FreeCourse from '../Pages/FreeCourse/FreeCourse';
import Home from '../Pages/Home/Home';
import Main from './Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/courses', element: <CourseSideBar></CourseSideBar> },
            { path: '/blog', element:<Blog></Blog>  },
            { path: '/freecourse', element:<FreeCourse></FreeCourse>  },
            { path: '/faq', element: <FAQ></FAQ> },
            { path: '/login', element: <Login></Login> },
            { path: '/registration', element: <Registration></Registration> },
            { path: '/forgotpass', element: <ForgotPassword></ForgotPassword> },
            { path: '*', element: <Error></Error>}
        ]
    }
]);
export default router;