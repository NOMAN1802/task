/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ArchiveRow = ({task}) => {
    return (
        <tr>
            <th>
               {task?.title}
            </th>
            <td>
                 {task?.priority
}
            </td>
            <td>
                {task?.date}
            </td>
            <td>{task?.assignedTo}</td>
            <td>{task?.status}</td>
            
        </tr>
    );
};

export default ArchiveRow;