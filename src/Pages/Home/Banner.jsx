import React from 'react';
import '../style.css'

const Banner = () => {
    return (
    <div>
        {/* <h2>This is banner </h2> 
        
        
        
        
        
        
        
        import React, { useState } from 'react';
import '../style.css'
import logoNav from '../../Asset/Logo.png';


const Navbar = () => {

    return (
        <div className='container flex justify-between items-center'>
            <div className='flex  items-center'>
                <span>
                    <img className='w-16' src={logoNav} alt="" />
                </span>
                <nav className='ml-20'>
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
                                           <span className='w-12 p-3 h-12 bg-downlist flex items-center rounded-full'>
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
                                            <a href="#"> <span class="arrow">&rarr;</span></a>

                                        </li>
                                    </span>
                                </div>
                            </ul>
                        </li>
                        <li><a href="#">Brand Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
            <div className='navLastButton'>
                <a href="">Make a Metting</a>
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
        
        
        
        
        
        
         body {
     max-width: 1990px;
     margin: 0 auto;
     background-color: #211F20;
 }

 .container {
     margin: 0 auto !important;
 }


 nav ul {
     list-style: none;
     margin: 0;
     padding: 0;
     display: flex;
 }

 nav ul li {
     margin-right: 20px;
     position: relative;
 }

 nav ul li:last-child {
     margin-right: 0;
 }

 nav ul li a {
     opacity: 0.9;
     color: rgb(255, 255, 255);
     font-family: Switzer;
     font-size: 18px;
     font-weight: undefined;
     line-height: 22px;
     letter-spacing: 0px;
     text-align: left;
     text-transform: capitalize;
     margin-left: 32px;
 }

 nav li a:hover {
     border-bottom: 1px solid white;
 }

 nav ul li:hover>ul {
     display: block;
 }

 .dropdown-menu {
    background: rgb(39, 39, 39);
    box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.18);
    border-radius: 7px;
    display: none;
    position: absolute;
    background-color: #333;
    width: 628px;
    margin-left: -210px;
 }

 .dropdown-menu li {
     margin: 0;
     margin-top: 20px;
 }


 .dropdown-menu li a {
    color: rgb(255, 255, 255);
    font-family: Inter Tight;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
    padding: 0px;
    display: block;
    text-decoration: none;
    position: relative;
    margin-left: 20px;
 }

 .dropdown-menu li a:hover {
     border: none;
 }


 .arrow {
    font-size: 40px;
     margin-right: -85px;
     position: absolute;
     top: 50%;
     right: 10px;
     transform: translateY(-50%);
     visibility: hidden;
 }

 .dropdown-menu li:hover .arrow,
 .dropdown:hover>a .arrow {
     visibility: visible;
 }

 .navLastButton a {
     color: rgb(216, 216, 216);
     font-family: Switzer;
     font-size: 16px;
     font-weight: undefined;
     line-height: 19px;
     letter-spacing: 0px;
     text-align: left;
     border: 2px solid rgb(255, 255, 255);
     padding: 8px;
 }
        
        */}
    </div>
    );
};

export default Banner;