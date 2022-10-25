import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Pages/Blog/Blog';
import CourseSideBar from '../Pages/Courses/CourseSideBar';
import Error from '../Pages/Error/Error';
import FAQ from '../Pages/FAQ/FAQ';
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
            { path: '/faq', element: <FAQ></FAQ> },
            { path: '*', element: <Error></Error>}
        ]
    }
]);
export default router;