import React from 'react';
import { PalnsData } from '../../../Data/PlansData';
import Fade from 'react-reveal/Fade';
import Progress from '../../../Components/Others/Progress';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';


const WebDesign = () => {

    return (
        <div className="container px-7 mx-auto w-full text-white ">

            <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-10 mb-24'>
                <Bounce bottom>
                    <div className='w-full p-4 space-y-3'>
                        <h2 className='text-center text-2xl md:text-4xl sm:text-left pb-3'> Web Design can make easy your complex product.
                            services</h2>
                        <p className='inline-block  align-middle p-4 text-justify sm:text-left pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                        </p>
                        <p className='inline-block  align-middle p-4 text-justify sm:text-left pt-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.
                        </p>
                    </div>
                </Bounce>
                <Bounce bottom>
                    <div className='w-full p-4'>
                        <img className=' w-full' src="https://i.ibb.co/sJ0chV2/ezgif-4-492a554f96.jpg" alt="" />
                    </div>
                </Bounce>
            </div>

            <div className='container w-full md:w-3/4 px-7 mx-auto text-white '>
                <Slide bottom>
                    <h2 className=' sm:text-center text-2xl sm:text-5xl text-left'>Why Choose Me? </h2>
                </Slide>
                <Fade>
                    <p className="inline-block align-middle p-4 text-justify md:text-center pt-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.</p>
                </Fade>

                <div className='flex w-5/6 overflow-hidden mx-auto flex-col md:flex-row justify-between items-center mt-7'>
                    <div>
                        <Slide left duration={1000}>
                            <div className='flex flex-col md:flex-row items-center justify-between mb-5 '>
                                <h2 className='text-4xl'>Leadership</h2>
                                <p className="inline-block align-middle text-justify p-4  text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, temporibus, tempora nobis deleniti fuga sunt quia unde voluptates doloribus culpa rerum? Facere cupiditate culpa magnam animi corrupti laborum possimus.</p>
                            </div>
                        </Slide>
                        <Slide right duration={1500}>
                            <div className='flex  flex-col md:flex-row items-center justify-between mb-5'>
                                <h2 className='text-4xl '>Team,Work</h2>
                                <p className="inline-block align-middle p-4 text-justify text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, temporibus, tempora nobis deleniti fuga sunt quia unde voluptates doloribus culpa rerum? Facere cupiditate culpa magnam animi corrupti laborum possimus.</p>
                            </div>
                        </Slide>
                        <Slide right duration={1500}>
                            <div className='flex  flex-col md:flex-row items-center justify-between'>
                                <h2 className='text-4xl'>Flexibility</h2>
                                <p className=" inline-block align-middle p-4 text-justify ml-0 sm:ml-6 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, temporibus, tempora nobis deleniti fuga sunt quia unde voluptates doloribus culpa rerum? Facere cupiditate culpa magnam animi corrupti laborum possimus.</p>
                            </div>
                        </Slide>

                    </div>
                </div>
                {/* <p className="inline-block align-middle text-justify mt-4 p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                </p> */}
            </div>
            {/* ==============================Progress Bar  ================= */}

            <div class="container overflow-hidden scrollable-div py-10 w-full md:w-5/6 mx-auto">
                <h3 className="py-7 text-white text-4xl font-semibold">PROFESSIONAL SKILLS</h3>
                <div className="">
                    <Fade>
                        <Progress />
                    </Fade>

                </div>
            </div>

            <div className="container w-full mx-auto py-20">
                <h3 className="text-5xl text-white">My Service Planing</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-around items-center py-10'>
                    {
                        PalnsData?.map(plan => (
                            <Fade bottom>
                                <div key={plan?.id} className="p-5 py-10 text-white bg-[#1E1E1E] hover:shadow-2xl duration-200 rounded-xl md:mx-5">
                                    <h3 className="text-2xl py-5">{plan?.plan}</h3>
                                    <h2 className="text-5xl md:text-6xl font-bold py-5">${plan?.price} <sub className='text-xl -ml-3'>/mo</sub> </h2>
                                    <div className="space-y-3 pt-5">
                                        {
                                            plan?.data?.map(d => (
                                                <p key={d} className="">{d}</p>
                                            ))
                                        }
                                    </div>

                                    <div className="pt-5">
                                        <button className='px-10 py-3 rounded-3xl text-white border hover:border-primary border-white hover:shadow-xl'>Get Started</button>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center mt-24 mb-36 w-full md:w-5/6 mx-auto'>
                <Fade bottom>
                    <div className='bg-[#313741] p-6 space-y-3'>
                        <h2 className="text-3xl font-bold mb-3 text-left text-black">02.</h2>
                        {/* <h4 className="text-5xl text-left mb-3 text-white font-black">WEB DESIGN</h4> */}
                        <span className="flex justify-between items-center">
                            <h4 className="text-2xl text-[#05C7AE] font-semibold mb-3 text-left">WEB DESIGN</h4>
                            {/* <img className='w-24' src="https://i.ibb.co/1LcT7sF/download-removebg-preview.png" alt="" /> */}
                        </span>
                        <p className="inline-block align-middle text-start pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
                        </p>
                    </div>
                </Fade>
                <Fade top>
                    <div className='bg-[#05C7AE] p-6 py-10 space-y-3'>
                        <h2 className="text-3xl font-bold mb-3 text-left text-[#07463E]">01.</h2>
                        {/* <h4 className="text-5xl text-left mb-3 text-white font-black">WEB DESIGN</h4> */}
                        <span className="flex justify-between items-center">
                            <h4 className="text-2xl text-black font-semibold mb-3 text-left">UX/UI DESIGN</h4>
                            {/* <img className='w-24' src="https://i.ibb.co/1LcT7sF/download-removebg-preview.png" alt="" /> */}
                        </span>
                        <p className="inline-block align-middle text-start pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
                        </p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='bg-[#313741] p-6 space-y-3'>
                        <h2 className="text-3xl text-left font-bold mb-3  text-black">03.</h2>
                        <span className="flex justify-between items-center">
                            <h4 className="text-2xl text-[#05C7AE] font-semibold mb-3 text-left">APP DESIGN</h4>
                            {/* <img className='w-16' src="https://i.ibb.co/7XBNx6k/5088-removebg-preview.png" alt="" /> */}
                        </span>
                        <p className="inline-block align-middle text-start pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
                        </p>
                    </div>
                </Fade>
            </div>
            {/*======== Portfulio =============== */}

        </div>
    );
};

export default WebDesign;