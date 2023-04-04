import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const CardAnim = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-14 py-10 overflow-hidden'>
            <div className="flex flex-col md:flex-row w-full bg-[#1E1E1E] rounded-2xl">
                <Fade bottom>
                    <div className="grid card rounded-box place-items-center">
                        <div className="grid card rounded-box place-items-center p-3 space-y-2">
                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/elementor/thumbs/credit-card-1-pbslqqe9jk1vj2q91wpyh3nfu72maa0h94gxn84oww.jpg" alt="" className="p-5" />
                            <h3 className="text-2xl leading-tight">DIGITAL SOLUTIONS</h3>
                            <p className="pb-3 px-3">We want to bring a splash of colour into a see mingly grey world and become</p>
                            <button className="text-indigo-500 group flex gap-2 hover:gap-7 items-center justify-center font-semibold duration-300"> <span className="hidden group-hover:block group-hover:translate-x-5 group-hover:gap-7 duration-300"><FaArrowRight /></span> <span className="text-indigo-500 group-hover:text-indigo-600 -mt-1 group-hover:gap-7 duration-300">Learn More</span> <span className="block group-hover:hidden group-hover:translate-x-5 duration-300"><FaArrowRight /></span> </button>
                        </div>
                    </div>
                </Fade>
                <div className="divider"></div>
                <Fade top>
                    <div className="grid card rounded-box place-items-center">
                        <div className="grid card rounded-box place-items-center p-3 space-y-2">
                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/elementor/thumbs/credit-card-1-pbslqqe9jk1vj2q91wpyh3nfu72maa0h94gxn84oww.jpg" alt="" className="p-5" />
                            <h3 className="text-2xl leading-tight">SMART EXPERIENCE</h3>
                            <p className="pb-3 px-3">We want to bring a splash of colour into a see mingly grey world and become</p>
                            <button className="text-indigo-500 group flex gap-2 hover:gap-7 items-center justify-center font-semibold duration-300"> <span className="hidden group-hover:block group-hover:translate-x-5 group-hover:gap-7 duration-300"><FaArrowRight /></span> <span className="text-indigo-500 group-hover:text-indigo-600 -mt-1 group-hover:gap-7 duration-300">Learn More</span> <span className="block group-hover:hidden group-hover:translate-x-5 duration-300"><FaArrowRight /></span> </button>
                        </div>
                    </div>
                </Fade>
                <div className="divider"></div>
                <Fade bottom>
                    <div className="grid card rounded-box place-items-center">
                        <div className="grid card rounded-box place-items-center p-3 space-y-2">
                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/elementor/thumbs/credit-card-1-pbslqqe9jk1vj2q91wpyh3nfu72maa0h94gxn84oww.jpg" alt="" className="p-5" />
                            <h3 className="text-2xl leading-tight">RESULTS WITH PROFIT</h3>
                            <p className="pb-3 px-3">We want to bring a splash of colour into a see mingly grey world and become</p>
                            <button className="text-indigo-500 group flex gap-2 hover:gap-7 items-center justify-center font-semibold duration-300"> <span className="hidden group-hover:block group-hover:translate-x-5 group-hover:gap-7 duration-300"><FaArrowRight /></span> <span className="text-indigo-500 group-hover:text-indigo-600 -mt-1 group-hover:gap-7 duration-300">Learn More</span> <span className="block group-hover:hidden group-hover:translate-x-5 duration-300"><FaArrowRight /></span> </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default CardAnim;