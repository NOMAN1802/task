/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TeamDetails from './TeamDetails';
import { Helmet } from 'react-helmet';



const Team = () => {
    // const [teams, setTeams] = useState([]);

    // useEffect(() => {
    //     fetch('/public/teamData.json')
    //       .then((res) => {
    //         if (!res.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return res.json();
    //       })
    //       .then((data) => setTeams(data))
    //       .catch((error) => console.error('Fetch error:', error));
    //   }, []);
    //   console.log(teams);

    const teams = [
        {
          id: 1,
          name: "Mezba Abedin",
          email: "mezba@abedin.com",
          teamName: "Demon Slaye"
        },
        {
          id: 2,
          name: "Nahid Hasan",
          email: "nahid@hasan.com",
          teamName: "Demon Slaye"
        },
        {
          id: 3,
          name: "Mustakim Al Noman",
          email: "no@man.com",
          teamName: "Demon Slayer"
        },
        {
          id: 4,
          name: "Tanmoy Parvez",
          email: "user4@example.com",
          teamName: "Jujutsu Kisen"
        },
        {
          id: 5,
          name: "Fahim Ahmed Firoz",
          email: "user5@example.com",
          teamName: "Jujutsu Kisen"
        },
        {
          id: 6,
          name: "Rahatul Islam",
          email: "user6@example.com",
          teamName: "Jujutsu Kisen"
        },
        {
          id: 7,
          name: "Samin Israr Ravi",
          email: "user7@example.com",
          teamName: "Attack On Titain"
        },
        {
          id: 8,
          name: "Emtiaj Ahmed",
          email: "user8@example.com",
          teamName: "Attack On Titain"
        },
        {
          id: 9,
          name: "Fahim Hasan",
          email: "user9@example.com",
          teamName: "Attack On Titain"
        }
      ];
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