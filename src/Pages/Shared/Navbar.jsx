import React from 'react';
import '../MainStyle.css'
import logoNav from '../../Asset/Logo.png';


const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>English</a></li>
                            <li><a>Concept</a></li>
                            <li><a>Empowerment</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Brand Portfolios</a></li>
                                    <li><a>Blog</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a href="">
                        <img className='w-20' src={logoNav} alt="navLogo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>English</a></li>
                        <li><a>Concept</a></li>
                        <li><a>Empowerment</a></li>
                        <li tabIndex={0}>
                            <a>
                                Service
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className=" p-2">
                          <div className='flex justify-center items-center'>
                          <div>
                              <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                              </div>
                              <div>
                              <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                              </div>
                          </div>
                            </ul>
                        </li>
                        <li><a>Brand Portfolios</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="" className="btnEnd">Make setting</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;