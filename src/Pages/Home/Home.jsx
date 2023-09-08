/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Home = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
      );
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const newTaskId = Date.now();
        const saveTask = {id: newTaskId, title: data.title, description: data.description, date: data.date, assignedTo: data?.assignedTo, priority: data?.priority,status: 'pending' }
        setTasks([...tasks, saveTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, saveTask]));


        reset();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task Submitted SuccessFully',
            showConfirmButton: false,
            timer: 1500
        })

        return saveTask;
    };
    return (
    <div>
         <div className="flex justify-between items-center">
            <div>
              <h1 style={{ fontFamily: 'cursive', fontSize: '24px' }} className="font-semibold text-5xl my-6">Manage Tasks</h1>
              
            </div>
            
          </div>
          <div className="flex gap-5">
              <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
                <BellIcon className="h-6 w-6" />
              </button>
              
            </div>
          <div>
              <h1 style={{ fontFamily: 'cursive', fontSize: '20px' }} className="font-semibold text-3xl my-6">Add a task to your team member</h1>
              </div>
        <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-5">
                <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                    Title
                </label>
                <input
                    className="input input-bordered"
                    type="text"
                    id="title"
                    {...register('title')}
                />
            </div>
            <div className="flex flex-col mb-5">
                <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                    Description
                </label>
                <textarea
                    className="input input-bordered"
                    type="text"
                    id="description"
                    {...register('description')}
                />
            </div>
            <div className="flex flex-col mb-5">
                <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                    Deadline
                </label>
                <input
                    className="input input-bordered"
                    type="date"
                    id="date"
                    {...register('date')}
                />
            </div>
            <div className="flex flex-col mb-5">
                <label style={{ fontFamily: 'cursive', fontSize: '20px' }} htmlFor="title" className="mb-2">
                    Assign to
                </label>
                <select
                    className="input input-bordered"
                    id="assignedTo"
                    {...register('assignedTo')}
                >

                    <option value="Mezba Abedin">Mezba Abedin</option>
                    <option value="Nahid Hasan">Nahid Hasan</option>
                    <option value="Mustakim Al Noman">Mustakim Al Noman</option>
                    <option value="Tanmoy Parvez">Tanmoy Parvez</option>
                    <option value="Fahim Ahmed Firoz">Fahim Ahmed Firoz</option>
                    <option value="Rahatul Islam">Rahatul Islam</option>
                    <option value="Samin Israr Ravi">Samin Israr Ravi</option>
                    <option value="Emtiaj Ahmed">Emtiaj Ahmed</option>
                    <option value="Fahim Hasan">Fahim Hasan</option>
                </select>
            </div>
            <div className="flex flex-col mb-5">
                <label htmlFor="title" className="mb-2">
                    Priority
                </label>
                <select
                    className="input input-bordered"
                    id="priority"
                    {...register('priority')}
                >
                    <option defaultValue value="high">
                        High
                    </option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div className="flex gap-3 justify-end">

                <button type="submit" className="btn btn-secondary ">
                    submit
                </button>
            </div>
        </form>
    </div>
    )
};

export default Home;