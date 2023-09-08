/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaSignOutAlt, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';
import { BiLogIn } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../providers/AuthProvider';


const Sidebar = () => {
    const { user, logOut } = useContext(AuthContext);
    

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <Helmet>
                <title>SH75 Academy | Dashboard</title>
            </Helmet>

            <div>
                <div className="drawer lg:drawer-open w-full">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Content  */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-stone-500 opacity-60 text-white ">
                            {/* Sidebar content here */}
                            <div className='mt-8 text-center'>


                                <div className="avatar online w-12 mx-2 m-auto">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} />


                                    </div>
                                </div>

                                <p className='mt-2 text-center text-white font-semibold'>{user?.displayName}</p>
                                <p className='mt-2 text-center text-white font-semibold'>
                                    {user?.email}
                                </p>

                            </div>




                            <div>
                                <li style={{ fontFamily: 'cursive', fontSize: '20px' }}><NavLink className='my-2 mt-4' to='/'><FaHome></FaHome> Home</NavLink></li>
                                <li style={{ fontFamily: 'cursive', fontSize: '20px' }}><NavLink className='my-2' to='dashboard'><FaUser></FaUser>Dash Board</ NavLink></li>
                                <li style={{ fontFamily: 'cursive', fontSize: '20px' }}><NavLink className='my-2' to='profile'><FaUser></FaUser>Profile</ NavLink></li>
                                <li style={{ fontFamily: 'cursive', fontSize: '20px' }}><NavLink className='my-2' to='team'><FaUsers></FaUsers>Team</NavLink></li>
                                <li style={{ fontFamily: 'cursive', fontSize: '20px' }}><NavLink className='my-2' to='tasks'><CgMenu></CgMenu> Task</NavLink></li>
                                
                                {
                                    user ? <>
                                        
                                        <li style={{ fontFamily: 'cursive', fontSize: '20px' }}>Log Out </li>
                                        
                                        <div className='mx-auto'>
                                        <button onClick={handleLogOut} className=" mx-12"><FaSignOutAlt></FaSignOutAlt></button>
                                        </div>
                                    </> : <>
                                    <li><NavLink style={{ fontFamily: 'cursive', fontSize: '20px' }} className='my-2 mt-4' to='/login'><BiLogIn></BiLogIn>Login</NavLink></li>
                                    </>
                                }
                            </div>

                        </ul>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;