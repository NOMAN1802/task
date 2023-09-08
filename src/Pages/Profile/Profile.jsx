/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ProfileCard from './ProfileCard';

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
        {/* {userData?.map((user, index) => (
                    <ProfileCard key={index} user ={user}></ProfileCard>
                ))} */}

{
                              Array.isArray(userData) && userData.map((user) => (
                                <ProfileCard key={user.email} user={user} />))
                              
                  }
      </div>
    );
};

export default Profile;