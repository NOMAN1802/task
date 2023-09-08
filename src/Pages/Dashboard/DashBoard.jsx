/* eslint-disable no-unused-vars */
import React from 'react';
import Archive from './Archive/Archive';
import { Helmet } from 'react-helmet';

const DashBoard = () => {
    return (
        <div>
            <Helmet>
                <title>Task Management | Dashboard</title>
            </Helmet>
            <Archive></Archive>
        </div>
    );
};

export default DashBoard;