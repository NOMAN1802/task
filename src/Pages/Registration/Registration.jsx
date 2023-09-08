/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import registration from '../../assets/registration.json'
import { Helmet } from 'react-helmet';


const Registration = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
      );

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const LoggedUser = result.user;
                console.log(LoggedUser);

                
                updateUserProfile(data.name, data.photoURL)
                    
                    const newTaskId = Date.now();
                    const saveInfo = {id: newTaskId,name: data.name, email: data.email, photoURL: data.photoURL, teamName: data.teamName,Bio: data.Bio  }

                    setUsers([...users, saveInfo]);
                    localStorage.setItem('userInfo', JSON.stringify([...users, saveInfo]));
                    reset();
                    Swal.fire({
                             position: 'top-end',
                             icon: 'success',
                             title: 'User Created SuccessFully',
                             showConfirmButton: false,
                             timer: 1500
                                    })
                    navigate('/');
                    

                   
                    
            })
            

    };
   

    return (
        <>

            <Helmet>
                <title>Task Management | Register</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                    <div className=" w-1/2 text-center lg:text-left">
                        <Lottie animationData={registration} loop={true} height={250} width={150} />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                        <h1 className="text-3xl font-bold text-blue-200 text-center pt-8">Register <span className='text-stone-200'> now!</span></h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", { required: true })}
                                    name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bio</span>
                                </label>
                                <input type="text"
                                    {...register("Bio", { required: true })}
                                    name='Bio' placeholder="Bio" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true, minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one Uppercase one lower case one number & one special characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"
                                    {...register("confirm password", {
                                        required: true, minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    name='confirm password' placeholder="confirm password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one Uppercase one lower case one number & one special characters</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Team Name</span>
                                </label>
                                <select
                                    className="input input-bordered"
                                    id="teamName"
                                    {...register('teamName')}
                                >
                                    <option value="Demon Slayer">Demon Slayer</option>
                                    <option value="Jujutsu Kisen">Jujutsu Kisen</option>
                                    <option value="Attack On Titain">Attack On Titain</option>
                                </select>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit"
                                    className="btn btn-secondary"
                                    value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'><small>Already have  an account <Link to={'/login'}> Login</Link></small></p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
