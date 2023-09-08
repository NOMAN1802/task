/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Navbar/Sidebar/Sidebar';

const MainLayOut = () => {
    return (
        <div>
         <Sidebar></Sidebar>      
        </div>
    );
};

export default MainLayOut;