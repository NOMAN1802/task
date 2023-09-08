/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayOut from '../Layout/MainLayOut';
import Profile from '../Pages/Profile/Profile';
import Home from '../Pages/Home/Home';
import Tasks from '../Pages/Tasks/Tasks';
import Team from '../Pages/Team/Team';
import DashBoard from '../Pages/Dashboard/DashBoard';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';




  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOut></MainLayOut>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'profile',
          element:<Profile></Profile>
        },
        {
          path:'tasks',
          element:<Tasks></Tasks>
        },
        {
          path:'team',
          element:<Team></Team>
        },
        {
          path:'dashboard',
          element:<DashBoard></DashBoard>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'registration',
            element:<Registration></Registration>
        }
      
      ]
    },
  ]);

  export default router;