import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const WhyEmotion = () => {
    return (
        <div className='container h-full pt-5 md:pt-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold">Why Emotion</h3>

            <section className='flex items-center justify-center w-full mx-auto'>
                <div className="drawer">
                    <div className="drawer-content flex flex-col">
                        {/* <!-- Navbar --> */}
                        <div className="w-5/6 md:w-1/5 mx-auto navbar bg-base-300 rounded-full my-3 md:my-7">
                            <div className="w-full mx-auto ">
                                <ul className="menu menu-horizontal text-sm md:text-md flex justify-between items-center w-full mx-auto ">
                                    {/* <!-- Navbar menu content here --> */}
                                    <li className='flex justify-center w-1/2 mx-auto rounded-full'>
                                        <Link className='focus:bg-black focus:text-white ml-3 rounded-full ' to="company"> Company </Link>
                                    </li>
                                    <li className='flex justify-center w-1/2 mx-auto rounded-full'>
                                        <Link className='focus:bg-black focus:text-white rounded-full' to="owner"> Owner </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Page content here --> */}
                        <div className="h-fit w-full">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyEmotion;