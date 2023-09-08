/* eslint-disable no-unused-vars */
import React from 'react';

const ProfileCard = (user) => {
    
    console.log(user);
    return (
       
        <div className="mx-4 grid md:grid-cols-2 items-center gap-3 border p-4 rounded-xl border-gray-700 w-2/3">

        <div className="w-1/2 h-[250px]">
            <img
                src={user?.user?.photoURL}
                alt="photo"
                className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
            />
        </div>
        <div>
                
                    <p style={{ fontFamily: 'cursive', fontSize: '20px' }} className=' text-slate-400'>Name:{user?.user?.name}</p>
                
                   <p style={{ fontFamily: 'cursive', fontSize: '20px' }} className=' text-slate-400'>Team Name:{user?.user?.teamName}</p>
                
                    <p style={{ fontFamily: 'cursive', fontSize: '20px' }} className=' text-slate-400'>Email:{user?.user?.email}</p>
            
          
                
          
        </div>
        <div>
            <h2 style={{ fontFamily: 'cursive', fontSize: '20px' }} className="text-4xl font-bold mb-5 text-slate-400">Bio: </h2>
            <p style={{ fontFamily: 'cursive', fontSize: '20px' }} className=' text-slate-400'>Email:{user?.user?.Bio}</p>
    
          
        </div>
    </div>
    );
};

export default ProfileCard;
