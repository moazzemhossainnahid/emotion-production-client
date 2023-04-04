import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CardAnim = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-14 overflow-hidden'>
            <div className="flex flex-col md:flex-row w-full bg-[#1E1E1E] rounded">
                <div className="grid card rounded-box place-items-center p-3">
                    <img src="https://wgl-demo.net/zeptech/wp-content/uploads/elementor/thumbs/credit-card-1-pbslqqe9jk1vj2q91wpyh3nfu72maa0h94gxn84oww.jpg" alt="" className="" />
                    <h3 className="text-2xl leading-tight">DIGITAL SOLUTIONS</h3>
                    <p className="pb-5">We want to bring a splash of colour into a see mingly grey world and become</p>
                    <button className="text-indigo-500 group flex gap-2 items-center justify-center duration-300"> <span className="hidden group-hover:block duration-200"><FaArrowRight /></span> <span className="text-indigo-500 -mt-1">Learn More</span> <span className="block group-hover:hidden"><FaArrowRight /></span> </button>
                </div>
                <div className="divider"></div>
                <div className="grid card rounded-box place-items-center">

                </div>
                <div className="divider"></div>
                <div className="grid card rounded-box place-items-center">

                </div>
            </div>
        </div>
    );
};

export default CardAnim;