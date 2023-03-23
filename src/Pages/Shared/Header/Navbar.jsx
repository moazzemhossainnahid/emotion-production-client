import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import { HiBars3CenterLeft } from "react-icons/hi2";
import logo from '../../../Assets/Public/Logo.png';


const Navbar = ({ handleThemeChange, theme }) => {
    const [user] = useAuthState(auth);


    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };


    const logout = () => {
        signOut(auth);
        //Token Remove
        localStorage.removeItem("accessToken");
    };

    const manuItems = (
        <>
            {/* <li>
                <NavLink className="hover:rounded-none" to="/"> Home </NavLink>
            </li> */}
            <li>
                <NavLink className="hover:rounded-none" to="/"> English </NavLink>
            </li>
            <li>
                <NavLink className="hover:rounded-none" to="concepts"> Concepts </NavLink>
            </li>
            <li>
                <NavLink className="hover:rounded-none" to="empowerment"> Empowerment </NavLink>
            </li>
            <li class="dropdown">
                <span><NavLink to="services">Services</NavLink></span>
                {/* <span>Services</span> */}
                <ul class="dropdown-menu">
                    <div className='mb-1 -ml-52 -mt-3 bg-[#211f20] flex items-start rounded'>
                        <div>
                            <li className='flex items-center group'>
                                <NavLink to="digitalbrand">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/L6Jkztx/Path-2.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Digital Brand </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="webdesign">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/9bzLHG5/Group-792.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Web Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="packaging">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/XkFg5PV/package-box.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Packaging </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="animation">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/k9pRjt1/animation.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Animation </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                        </div>
                        <div className='ml-24 mt-0 flex flex-col items-start'>
                            <li className='flex items-center group'>
                                <NavLink to="contantshotting">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/pZtx1mq/Design-32.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Content Shotting </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="uiuxdesign">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/zP51JbF/ux-design.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> UX UI Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="prototype">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/0V2cnpt/prototype.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Prototype </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            {/* <li className='flex items-center group'>
                                <NavLink to="blogs">
                                    <span className='w-12 p-3 h-12 bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/k9pRjt1/animation.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Animation </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li> */}

                        </div>
                    </div>
                </ul>
            </li>
            <li>
                <NavLink to="brandportfolio">Brand Portfolios</NavLink>
            </li>
            <li>
                <NavLink to="blogs">Blogs</NavLink>
            </li>
        </>
    );

    const mobileManuItems = (
        <>
            {/* <li>
                <NavLink className="hover:rounded-none" to="/"> Home </NavLink>
            </li> */}
            <li>
                <NavLink className="hover:rounded-none" to="/"> English </NavLink>
            </li>
            <li>
                <NavLink className="hover:rounded-none" to="concepts"> Concepts </NavLink>
            </li>
            <li>
                <NavLink className="hover:rounded-none" to="empowerment"> Empowerment </NavLink>
            </li>
            <li class="dropdown">
                <span><NavLink to="services">Services</NavLink> &rarr;</span>
                {/* <span>Services &rarr;</span> */}
                <ul class="dropdown-menu">
                    <div className='mb-1 -ml-40 -mt-32 z-20 bg-[#211f20] flex flex-col items-start rounded'>
                        <div>
                            <li className='flex items-center group'>
                                <NavLink to="digitalbrand">
                                    <p className="flex items-center"> Digital Brand </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="webdesign">
                                    <p className="flex items-center"> Web Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="packaging">
                                    <p className="flex items-center"> Packaging </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="animation">
                                    <p className="flex items-center"> Animation </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                        </div>
                        <div className='flex flex-col items-start'>
                            <li className='flex items-center group'>
                                <NavLink to="contantshotting">
                                    <p className="flex items-center"> Content Shotting </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="uiuxdesign">
                                    <p className="flex items-center"> UX UI Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="prototype">
                                    <p className="flex items-center"> Prototype </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            {/* <li className='flex items-center group'>
                                <NavLink to="blogs">
                                    <p className="flex items-center"> Animation </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li> */}

                        </div>
                    </div>
                </ul>
            </li>
            <li>
                <NavLink to="brandportfolio">Brand Portfolios</NavLink>
            </li>
            <li>
                <NavLink to="blogs">Blogs</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar sticky top-0 w-full z-50 lg:px-10 bg-[#211f20] backdrop-filter backdrop-blur-lg border-b-[0.5px] border-gray-500">
            <div className="navbar-start">
                <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
                    <div className="">
                        <ul tabIndex="0" className="bg-[#211f20] h-screen">
                            <Link to="/">
                                <div className="flex items-center w-full">
                                    {/* <img className="w-9 ml-3" src={wslogo} alt="image" /> */}
                                    <div className="ml-1 text-md font-sub font-bold mt-1">
                                        <img className="h-[70px]" src={logo} alt="" />
                                    </div>
                                </div>
                            </Link>
                            <ul className="menu menu-compact text-white py-7 text-xl">
                                {mobileManuItems}
                            </ul>
                            {/* <li>
                                {user ? (
                                    <div>
                                        <div className="flex flex-nowrap items-center cursor-pointer border-b border-neutral w-full">
                                            <label className="avatar">
                                                <div className="w-7 mx-2 my-2 rounded-full border border-gray-200">
                                                    <img
                                                        src={`${user?.photoURL
                                                            ? user?.photoURL
                                                            : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                                            }`}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <ul className="menu menu-compact">
                                            <li>
                                                <NavLink className="hover:rounded-none" to={"profile"}>
                                                    <i className="ml-4 fa-solid fa-user" />
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="hover:rounded-none" to={"mycourse"}>
                                                    <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="hover:rounded-none" to={"mybooks"}>
                                                    <i className="ml-4 fa-solid fa-book"></i>My Books
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href="!#" className=" hover:rounded-none" onClick={logout}>
                                                    <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="border-t border-neutral">
                                        <li>
                                            <Link
                                                className="mt-3 mx-3 w-56 btn-info btn-sm btn rounded-full text-white hover:rounded-full font-thin"
                                                to="Login"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="bg-[#494FC1] hover:bg-[#4a4e94] my-3 mx-3 w-56 hover:rounded-full btn-sm btn rounded-full text-white font-thin"
                                                to="Signup"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </li> */}

                            <li>
                                <Link to="meeting" className="mx-auto text-white">
                                    <h3 className="px-5 py-2 border hover:border-primary hover:duration-150 rounded w-[170px] mx-auto">Make a Meeting</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Drawer>
                <Link to="/">
                    <div className="flex items-center">
                        {/* <img className="w-9 ml-3" src={wslogo} alt="image" /> */}
                        <div className="ml-1 text-md font-header font-bold">
                            <img className="h-[70px]" src={logo} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-white menu-horizontal menu-compact p-0 gap-3 uppercase">
                    {manuItems}
                </ul>
            </div>

            {/* <div className="navbar-end hidden lg:flex">

                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-9 rounded-full">
                                <img
                                    src={`${user?.photoURL
                                        ? user?.photoURL
                                        : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                        }`}
                                    alt=""
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 shadow menu menu-compact dropdown-content rounded-md w-56 bg-base-100 text-warning"
                        >
                            <div className="mx-auto mt-3">
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img
                                            src={`${user?.photoURL
                                                ? user?.photoURL
                                                : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                                }`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-neutral">
                                <h1 className="text-lg text-center">
                                    {
                                </h1>
                                <p className="text-xs mb-2 text-center">Student</p>
                            </div>
                            <li>
                                <NavLink to={"profile"} className=" hover:rounded-none">
                                    <i className="ml-4 fa-solid fa-user" />
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"mycourse"} className="hover:rounded-none">
                                    <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:rounded-none" to={"mybooks"}>
                                    <i className="ml-4 fa-solid fa-book"></i>My Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/orders"} className="hover:rounded-none">
                                    <i className="ml-4 fa-solid fa-clock"></i>Payment History
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="!#"
                                    onClick={logout}
                                    className="hover:rounded-b-md hover:rounded-none text-red-600"
                                >
                                    <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex">
                        <a href="!#" className="btn-accent btn-sm btn rounded-md text-white font-thin">
                            <Link to="Login">Login</Link>
                        </a>
                        <div className="divider lg:divider-horizontal"></div>
                        <a href="!#" className="bg-[#494FC1] hover:bg-[#4a4e94] btn-sm btn rounded-md text-white font-thin">
                            <Link to="SignUp">Register</Link>
                        </a>
                    </div>
                )}
            </div> */}

            <li className="navbar-end hidden lg:flex">
                <Link to="meeting" className="mx-auto text-white">
                    <h3 className="px-5 py-2 border hover:border-primary hover:duration-150 rounded w-[170px] mx-auto">Make a Meeting</h3>
                </Link>
            </li>

            <div className="navbar-end lg:hidden flex">

                <div className="dropdown">
                    <label
                        onClick={toggleDrawer}
                        tabIndex="0"
                        className="mx-4 text-3xl lg:hidden cursor-pointer"
                    >
                        <HiBars3CenterLeft className="text-white" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
