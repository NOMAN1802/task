/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const TeamDetails = ({team}) => {

    const {teamName,name,email} = team;
    const [buttonName, setButtonName] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
  
    const handleClick = () => {
      
      setButtonName('Invitation Send');
      setIsDisabled(true);
    };

    return (
        <tr>
            <th>
               {team?.teamName}
            </th>
            <td>
                 {team?.name}
            </td>
            <td>
                {team?.email}
            </td>
            <td><button onClick={handleClick} disabled={isDisabled} className='btn btn-accent'>Sent Invite</button></td>
            
            
        </tr>
    );
};

export default TeamDetails;