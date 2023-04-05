import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Strategy = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-14 overflow-hidden py-10'>
            <div className='w-full h-full p-2'>
                <div className="w-full h-full relative mx-auto">
                    <div className="md:w-5/6 mx-auto text-center pb-10">
                        <Slide top>
                            <h3 className="text-[70px] md:text-[150px] text-center flex mx-auto w-full justify-center uppercase font-bold text-[#1E1E1E]"><Slide top duration={1000}>S</Slide> <Slide top duration={1500}>T</Slide> <Slide top duration={2000}>R</Slide> <Slide top duration={2500}>A</Slide> <Slide top duration={3000}>T</Slide> <Slide top duration={4000}>E</Slide> <Slide top duration={4500}>G</Slide> <Slide top duration={4500}>Y</Slide></h3>
                        </Slide>
                        <Fade bottom>
                            <h4 className="text-3xl md:text-5xl text-center font-bold text-white uppercase -mt-24 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>Measurable & Effective Results for Customers</h4>
                        </Fade>
                    </div>
                    <div className="relative">
                        <img draggable="false" style={{ animation: `bounce2 15s infinite` }} className='w-2/3 mx-auto relative h-[50vh] md:h-[100vh]' src="https://i.ibb.co/HgGpJJP/banner-image-1-1-d9080972e9bafe1029b1867172a79135-transformed.png" alt="" />
                        <img draggable="false" style={{ animation: `bounce-in 15s infinite` }} className='w-40 absolute right-40 top-10' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/coub-img-1.png" alt="" />
                        <div className="absolute top-0 left-0 right-0 bottom-0">

                            <Fade bottom>
                                <div className="w-full flex flex-col md:flex-row justify-around items-center gap-3 mt-10">
                                    <button className="py-3 px-7 rounded bg-indigo-600 hover:bg-indigo-400 duration-300 hover:scale-110 text-white text-xl">Get Started</button>
                                    <button className="py-3 px-7 rounded duration-300 hover:scale-110 text-white text-xl  flex items-center gap-3"> <span className="text-indigo-600 text-4xl"><FaTelegram /></span> Join us on Telegram</button>
                                </div>
                            </Fade>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Strategy;