import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import { PalnsData } from '../../../Data/PlansData';
import Fade from 'react-reveal/Fade';
const myRef = document.querySelector('.scrollable-div')

const WebDesign = () => {

    return (
        <div className="container px-7 mx-auto w-full text-white ">

            <div className='flex flex-col md:flex-row justify-between items-center  mt-10 mb-24'>
                <div className='w-full p-4'>
                    <h2 className='text-center text-2xl sm:text-5xl sm:text-left'> Web Design can make easy your complex product.
                        services</h2>
                    <p className='inline-block  align-middle p-4 text-justify sm:text-left pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </p>
                    <p className='inline-block  align-middle p-4 text-justify sm:text-left pt-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.
                    </p>
                </div>
                <div className='w-full p-4'>
                    <img className=' w-full' src="https://i.ibb.co/sJ0chV2/ezgif-4-492a554f96.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2 className=' sm:text-center text-2xl sm:text-5xl text-left'>Why Choose Me? </h2>
                <p className="inline-block align-middle p-4 text-justify sm:text-left pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.</p>
                <div className='flex  flex-col md:flex-row justify-between items-center mt-7'>
                    <div>
                        <div className='flex flex-col md:flex-row items-center justify-between mb-5 '>
                            <h2 className='text-4xl'>Leadership</h2>
                            <p className="inline-block align-middle p-4 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, temporibus, tempora nobis deleniti fuga sunt quia unde voluptates doloribus culpa rerum? Facere cupiditate culpa magnam animi corrupti laborum possimus.</p>
                        </div>


                        <div className='flex  flex-col md:flex-row items-center justify-between mb-5'>
                            <h2 className='text-4xl '>Team,Work</h2>
                            <p className="inline-block align-middle p-4 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, temporibus, tempora nobis deleniti fuga sunt quia unde voluptates doloribus culpa rerum? Facere cupiditate culpa magnam animi corrupti laborum possimus.</p>
                        </div>

                        <div className='flex  flex-col md:flex-row items-center justify-between'>
                            <h2 className='text-4xl'>Flexibility</h2>
                            <p className=" inline-block align-middle p-4 text-justify ml-0 sm:ml-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, temporibus, tempora nobis deleniti fuga sunt quia unde voluptates doloribus culpa rerum? Facere cupiditate culpa magnam animi corrupti laborum possimus.</p>
                        </div>
                    </div>
                    <div className='w-full p-4'>
                        <img className=' w-full' src="https://i.ibb.co/hVqxCGS/download.jpg" alt="" />
                    </div>
                </div>
                <p className="inline-block align-middle text-justify mt-4 p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                </p>
            </div>
            {/* ==============================Progress Bar  ================= */}

            <div class="container py-10 w-full md:w-5/6 mx-auto">
                <h3 className="py-7 text-white text-4xl font-semibold">PROFESSIONAL SKILLS</h3>
                <div className="scrollable-div">
                    {/* <ProgressBar
                        width="400px"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                        scrollArea={myRef}
                    /> */}
                </div>
            </div>


            {/* <div>
            <h2 className="text-left  text-white font-black">HTML</h2>
           <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"95%"}}> 95%</div>
            </div>
           </div> */}

            {/* <div className='mt-24'>
                <ProgressBar progress={progress} />
                <br />
                <div >
                    <button className='btn btn-ghost' onClick={() => setProgress(95)}>HTML</button>
                    <button className='btn btn-ghost' onClick={() => setProgress(80)}>CSS</button>
                    <button className='btn btn-ghost' onClick={() => setProgress(70)}>BOOSTRAP</button>
                    <button className='btn btn-ghost' onClick={() => setProgress(50)}>TAILWIND</button>
                    <button className='btn btn-ghost' onClick={() => setProgress(90)}>PHOTOSHOP</button>
                    <button className='btn btn-ghost' onClick={() => setProgress(70)}>ILLUSTRATOR</button>
                </div>
            </div> */}
            {/* ============================== packages =================== */}

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
            <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center mb-36 gap-4'>
                <div class="group relative w-80">
                    <img class="w-full object-cover" src="https://i.ibb.co/8s6BN0m/5810609.png" />
                    <div
                        class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-2xl text-white">Dashboard Design</h1>
                        <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Get it</a>
                    </div>
                </div>
                <div class="group relative w-80">
                    <img class="w-full object-cover" src="https://i.ibb.co/pjqRNzZ/5806461.png" />
                    <div
                        class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-2xl text-white">Awosome Design</h1>
                        <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Get it</a>
                    </div>
                </div>
                <div class="group relative w-80">
                    <img class="w-full object-cover" src="https://i.ibb.co/YNv6Tvc/01.png" />
                    <div
                        class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-2xl text-white">Mobile Responsive Design</h1>
                        <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Get it</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WebDesign;