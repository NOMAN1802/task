import { useSelector } from 'react-redux';
import TaskCard from '../../Tasks/TaskCard';
import ArchiveRow from './ArchiveRow';
import { useState } from 'react';

const Archive = () => {
  const { tasks } = useSelector((state) => state.tasksSlice);

  const archiveTasks = tasks.filter((item) => item.status == 'archive');
  console.log(tasks);
  // const pendingTasks = tasks?.filter((item) => item.status == 'pending');
  // const runningTasks = tasks?.filter((item) => item.status == 'running');
  // const doneTasks = tasks?.filter((item) => item.status == 'done');
 
  const [statusFilter, setStatusFilter] = useState('all');

  const filterTasks = () => {
    if (statusFilter === 'all') {
      return tasks; // Show all tasks
    } else {
      return tasks.filter((task) => task.status === statusFilter); // Filter tasks by status
    }
  };

  const filteredTasks = filterTasks();

  return (
    <div className="p-10">
      <div>
        <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className="text-4xl font-semibold mb-10 text-center">Archive board</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {archiveTasks?.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
      <h1 style={{ fontFamily: 'cursive', fontSize: '40px' }} className="text-4xl font-semibold my-10 text-center">All Tasks</h1>
      <div>
            <h2 style={{ fontFamily: 'cursive', fontSize: '30px' }} className="text-5xl mx-auto my-10">Total tasks:{tasks.length} </h2>
            <div>
      <div>
        <button className='btn btn-primary' onClick={() => setStatusFilter('all')}>All</button>
        <button className='btn btn-accent' onClick={() => setStatusFilter('pending')}>Pending</button>
        <button className='btn btn-neutral' onClick={() => setStatusFilter('running')}>In Process</button>
        <button className='btn btn-info' onClick={() => setStatusFilter('done')}>Done</button>
      </div>
      
    </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Title</th>
                            <th>priority</th>
                            <th>Date</th>
                            <th>Assign To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            filteredTasks.map(task => <ArchiveRow
                                key={task.id}
                                task={task}
                                
                                
                            >
                              {task.title} - Status: {task.status}
                            </ArchiveRow>)
                        }



                    </tbody>



                </table>
            </div>
        </div>
    </div>
    
  );
};

export default Archive;