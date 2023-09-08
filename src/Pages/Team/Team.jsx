/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TeamDetails from './TeamDetails';
import { Helmet } from 'react-helmet';



const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('/public/teamData.json')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => setTeams(data))
          .catch((error) => console.error('Fetch error:', error));
      }, []);
    return (
        
        <div>
            <Helmet>
                <title>Task Management | Team</title>
            </Helmet>
            <div>
            <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className="text-4xl font-semibold mb-10 text-center">Teams Summary</h1>
            </div>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                       
                        <th>Team Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Send Invite</th>
                        
                    </tr>
                </thead>
                <tbody>


                    {
                        teams?.map(team => <TeamDetails
                            key={team.id}
                            team={team}
                            
                            
                        >
                        </TeamDetails>)
                    }



                </tbody>



            </table>
        </div>
    
        </div>

    );
};

export default Team;