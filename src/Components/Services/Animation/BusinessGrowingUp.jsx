import React from 'react';
import { FaCheckCircle, FaTelegram } from 'react-icons/fa';
import { Slide } from 'react-reveal';
import Fade from 'react-reveal/Fade';

const BusinessGrowingUp = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-14 overflow-hidden'>
            <div className='w-full relative md:w-3/6 mx-auto p-4'>
                <img draggable="false" style={{ animation: `bounce-in 20s infinite` }} className='w-16 mx-auto flex items-start ' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/vector-img-2-1.png" alt="" />
                <div draggable="false" className="relative flex flex-col justify-center items-center w-52 md:w-full mx-auto h-52 md:h-[90vh] bg-cover">
                    <img draggable="false" style={{ animation: `bounce2 15s infinite` }} className='w-full absolute bottom-20 -left-3' src="https://i.ibb.co/dGYrcLS/Screenshot-1-removebg-preview.png" alt="" />
                    <img draggable="false" style={{ animation: `bounce-in 20s infinite` }} className='mx-auto flex items-center absolute left-3 w-96' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/vector-img-7.png" alt="" />
                </div>
            </div>
            <div className='w-full md:w-3/6 p-0 '>

                <div className="">
                    <Slide top>
                        <h3 className="text-[100px] md:text-[200px] flex uppercase font-bold text-[#1E1E1E]"><Slide top duration={1000}>W</Slide> <Slide top duration={1500}>H</Slide> <Slide top duration={2000}>Y</Slide></h3>
                    </Slide>
                    <Fade bottom>
                        <h4 className="text-3xl md:text-5xl font-bold text-white uppercase text-start -mt-24 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>WE HELP BUSINESS GROWING UP</h4>
                        <p className="text-gray-200 text-xl font-thin py-5 text-start">Personalization assumed up an excess of position in the showcasing space and has made each and every one of your messages exhausting and without feelings.</p>
                        <hr />
                    </Fade>
                    <Fade bottom>
                        <div className="w-full flex flex-col justify-start text-left items-center gap-3 mt-10">
                            <div className="flex items-center gap-3 justify-start w-full">
                                <span className="text-2xl text-indigo-700"><FaCheckCircle /></span>
                                <h3 className="text-white text-xl">Creating a great digital experience</h3>
                            </div>
                            <div className="flex items-center gap-3 justify-start w-full">
                                <span className="text-2xl text-indigo-700"><FaCheckCircle /></span>
                                <h3 className="text-white text-xl">Focus on people, interactions and collaboration</h3>
                            </div>
                            <div className="flex items-center gap-3 justify-start w-full">
                                <span className="text-2xl text-indigo-700"><FaCheckCircle /></span>
                                <h3 className="text-white text-xl">High standards of professionalism</h3>
                            </div>
                            <div className="flex items-center gap-3 justify-start w-full">
                                <span className="text-2xl text-indigo-700"><FaCheckCircle /></span>
                                <h3 className="text-white text-xl">A different way of thinking, both inside</h3>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>

        </div>
    );
};

export default BusinessGrowingUp;