import React, { useState } from 'react';
import '../style.css'
import logoNav from '../../Asset/Logo.png';


const Navbar = () => {

    return (
        <div className='container nav-background'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost bg-white mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu bg-downlist menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Concept</a></li>
                            <li><a href="#">Empowerment</a></li>

                            <li tabindex="0">
                                <a class="justify-between">
                                    Product
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a href="#">Digital Brand</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Packaging</a></li>
                                    <li><a href="#">Animation</a></li>
                                    <li><a href="#">Content Shotting</a></li>
                                    <li><a href="#">UX UI Design</a></li>
                                    <li><a href="#">Prototype</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Brand Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <a class="">
                        <img className='w-16' src={logoNav} alt="" />
                    </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <nav className=''>
                        <ul>
                            <li><a href="#">English</a></li>
                            <li><a href="#">Concept</a></li>
                            <li><a href="#">Empowerment</a></li>
                            <li class="dropdown">
                                <a href="#">Service</a>
                                <ul class="dropdown-menu">
                                    <div className='mb-1 ml-5 flex items-center'>
                                        <span>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
                                                    <img className='w-7' src="https://i.ibb.co/L6Jkztx/Path-2.png" alt="" />
                                                </span>
                                                <a href="#">Digital Brand <span class="arrow">&rarr;</span></a>

                                            </li>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
                                                    <img className='w-7' src="https://i.ibb.co/9bzLHG5/Group-792.png" alt="" />
                                                </span>
                                                <a href="#">Web Design<span class="arrow">&rarr;</span></a>

                                            </li>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-white  flex items-center rounded-full'>
                                                    <img className='w-7' src="https://i.ibb.co/XkFg5PV/package-box.png" alt="" />
                                                </span>
                                                <a href="#">Packaging<span class="arrow">&rarr;</span></a>

                                            </li>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
                                                    <img className='w-7' src="https://i.ibb.co/k9pRjt1/animation.png" alt="" />
                                                </span>
                                                <a href="#">Animation <span class="arrow">&rarr;</span></a>

                                            </li>
                                        </span>
                                        <span className='ml-24 mt-0'>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
                                                    <img className='w-7' src="https://i.ibb.co/pZtx1mq/Design-32.png" alt="" />
                                                </span>
                                                <a href="#">Content Shotting <span class="arrow">&rarr;</span></a>

                                            </li>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
                                                    <img className='w-7' src="https://i.ibb.co/zP51JbF/ux-design.png" alt="" />
                                                </span>
                                                <a href="#">UX UI Design<span class="arrow">&rarr;</span></a>

                                            </li>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
                                                    <img className='w-7' src=" https://i.ibb.co/0V2cnpt/prototype.png" alt="" />
                                                </span>
                                                <a href="#">Prototype <span class="arrow">&rarr;</span></a>

                                            </li>
                                            <li className='flex items-center'>
                                                <span className='w-12 p-3 h-12 flex items-center rounded-full'>
                                                    <img className='w-7' src=" " alt="" />
                                                </span>
                                                <a href="#"> <span class="arrow"></span></a>

                                            </li>
                                        </span>
                                    </div>
                                </ul>
                            </li>
                            <li><a href="#">Brand Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                    {/* <div className='navLastButton'>
                <a href="">Make a Metting</a>
            </div> */}
                </div>
                <div class="navbar-end navLastButton">
                    <a href="">Make a Metting</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;



// 3 https://i.ibb.co/XkFg5PV/package-box.png
//1 https://i.ibb.co/L6Jkztx/Path-2.png
//7 https://i.ibb.co/0V2cnpt/prototype.png
//6 https://i.ibb.co/zP51JbF/ux-design.png
//4 https://i.ibb.co/k9pRjt1/animation.png
//5 https://i.ibb.co/pZtx1mq/Design-32.png
//2 https://i.ibb.co/9bzLHG5/Group-792.png