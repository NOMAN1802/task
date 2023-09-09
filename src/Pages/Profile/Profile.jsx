/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ProfileCard from './ProfileCard';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState();
    useEffect(() => {
        const savedDataString = localStorage.getItem('userInfo');

        if (savedDataString) {
            const savedData = JSON.parse(savedDataString);
            setUserData(savedData);
        }
    }, []);
    return (

        
      
      <div>
       <Helmet>
                <title>Task Management | Profile</title>
            </Helmet>

{
                              Array.isArray(userData) && userData.map((user) => (
                                <ProfileCard key={user.id} user={user} />))
                              
                  }
      </div>
    );
};

export default Profile;