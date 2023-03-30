import React from 'react';
import { Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='w-full p-2 py-10 md:w-4/5 flex flex-col md:flex-row justify-center overflow-hidden items-center mx-auto'>

            <div className='w-full md:w-3/6 order-2 md:order-1 mx-auto md:text-left'>
                <Bounce left>
                    <h2 className='text-white font-bold text-3xl pb-2'>About Emotion</h2>
                    <div className="text-[#C9C9C9] space-y-2 text-start">
                        <p className='mt-2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged.</p>
                        <p className='mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting.</p>

                        <p className='mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. </p>

                    </div>
                </Bounce>
            </div>
            <Bounce right>
                <div className='w-full md:w-3/6 order-1 -p-2 md:order-2 mx-auto text-start px-3 rounded'>
                    <h3 className="text-white text-5xl font-bold">Frequently <br />
                        Asked Questions</h3>
                    <p className="py-5 text-sm text-white">Here is the Set of Questionaries May be comes up on your mind.If You do have
                        have more question, You Can Contact Us</p>
                    <div className="pt-5 flex justify-start">
                        <Link to="meeting" className="text-center text-white">
                            <h3 className="px-5 py-2 border flex justify-center items-center hover:border-primary hover:duration-150 rounded w-[200px] mx-auto">Make a Meeting <span className="text-white pl-2">&rarr;</span></h3>
                        </Link>
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default FAQ;