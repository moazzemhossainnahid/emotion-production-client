import React, { useEffect, useState } from 'react';

const DigitalBrand = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (counter < 2) {
                setCounter(counter + 1);
            } else {
                setCounter(0);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [counter]);
    return (
        <div className='container mx-auto'>
            {/*=========================== carousel  =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-36'>
                <div className="w-1/2 sm:pl-20 p-0 text-left">
                    <p className=' text-left text-white'> BUILDING THE NEXT GENERATION OF BOLD BRANDS</p>
                    <h2 className="text-left text-white font-black">Branding & Digital Agency</h2>
                    <button className='bg-green-800 text-left border p-4 text-white'>READ MORE</button>
                </div>

                <div className="carousel-container">
                    <div className="carousel-slide" style={{ transform: `translateX(-${counter * 500}px)` }}>
                        <img src="https://i.ibb.co/dK4QXQY/home-bg-01.jpg" />
                        <img src="https://i.ibb.co/F6Pz9th/home-bg-03.jpg" />
                        <img src="https://i.ibb.co/ygJDzXx/home-bg-02.jpg" />
                    </div>
                </div>
            </div>
            {/*===========================our  Goal  =======================*/}
            <div className='grid grid-cols-1  sm:grid-cols-3 place-items-center mt-36 gap-4'>

                <div className='flex justify-center items-start'>
                    <span className='mr-4'>
                        <img className='' src="https://i.ibb.co/Qn8Kttw/images-removebg-preview.png" alt="" />
                    </span>
                    <span className=''>
                        <h2 className='text-left text-white font-black'>Story</h2>
                        <p className='text-white text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta ipsum excepturi ex voluptatum quaerat, sint, quo inventore odit nesciunt quod pariatur quam veniam magni labore dolor! At, nulla fugit!</p>
                        <button className='text-gray-500 flex pt-2 justify-items-end bottom-1 border-b'>Explore</button>
                    </span>
                </div>

                <div className='flex justify-center items-start'>
                    <span className='mr-4'>
                        <img src="https://i.ibb.co/Qn8Kttw/images-removebg-preview.png" alt="" />
                    </span>
                    <span>
                        <h2 className='text-left text-white font-black'>Goals</h2>
                        <p className='text-white text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta ipsum excepturi ex voluptatum quaerat, sint, quo inventore odit nesciunt quod pariatur quam veniam magni labore dolor! At, nulla fugit!</p>
                        <button className='text-gray-500 flex pt-2 justify-items-end bottom-1 border-b'>Explore</button>
                    </span>
                </div>

                <div className='flex justify-center items-start'>
                    <span className='mr-4'>
                        <img src="https://i.ibb.co/Qn8Kttw/images-removebg-preview.png" alt="" />
                    </span>
                    <span>
                        <h2 className='text-left text-white font-black'>Achievements</h2>
                        <p className='text-white text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta ipsum excepturi ex voluptatum quaerat, sint, quo inventore odit nesciunt quod pariatur quam veniam magni labore dolor! At, nulla fugit!</p>
                        <button className='text-gray-500 flex pt-2 justify-items-end bottom-1 border-b'>Explore</button>
                    </span>
                </div>
            </div>

            {/*=========================== Goal end content =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-36'>
                <div className='w-full p-4'>
                    <img className=' w-full' src="https://i.ibb.co/sJ0chV2/ezgif-4-492a554f96.jpg" alt="" />
                </div>
                <div className='w-full p-4'>
                    <h2 className='text-center text-white text-2xl sm:text-5xl sm:text-left'> Perfect Digital Start</h2>
                    <p className='inline-block text-white align-middle p-4 text-justify sm:text-left pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </p>
                    <p className='inline-block text-white  align-middle p-4 text-justify sm:text-left pt-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled electronic.
                    </p>
                </div>
            </div>

            {/*=========================== Strategy =======================*/}
            <div className='grid grid-cols-1  sm:grid-cols-3 place-items-center mt-36  gap-24'>


                <div className=''>
                    <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                        <span className='flex justify-start'>
                            <img className='' src="https://i.ibb.co/SBxcwVG/ezgif-com-gif-maker.png" alt="" />
                        </span>
                    </span>
                    <span className=''>
                        <h2 className='mt-2 text-left text-white font-black'>Research</h2>
                        <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                    </span>
                </div>

                <div className=''>
                    <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                        <span className='flex justify-start'>
                            <img className='' src="https://i.ibb.co/sQPTxd2/ezgif-com-gif-maker-1.png" alt="" />
                        </span>
                    </span>
                    <span className=''>
                        <h2 className='mt-2 text-left text-white font-black'>Brand Strategy</h2>
                        <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                    </span>
                </div>

                <div className=''>
                    <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                        <span className='flex justify-start'>
                            <img className='' src="https://i.ibb.co/8DFvvBd/ezgif-com-gif-maker-4.png" alt="" />
                        </span>
                    </span>
                    <span className=''>
                        <h2 className='mt-2 text-left text-white font-black'>Naming</h2>
                        <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                    </span>
                </div>


                <div className=''>
                    <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                        <span className='flex justify-start'>
                            <img className='' src="https://i.ibb.co/Tbbr8dm/ezgif-com-gif-maker.png" alt="" />
                        </span>
                    </span>
                    <span className=''>
                        <h2 className='mt-2 text-left text-white font-black'>Web & Digital</h2>
                        <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                    </span>
                </div>


                <div className=''>
                    <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                        <span className='flex justify-start'>
                            <img className='' src="https://i.ibb.co/8M59J1Q/ezgif-com-gif-maker-1.png" alt="" />
                        </span>
                    </span>
                    <span className=''>
                        <h2 className='mt-2 text-left text-white font-black'>Content Creation</h2>
                        <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                    </span>
                </div>

                <div className=''>
                    <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                        <span className='flex justify-start'>
                            <img className='' src="https://i.ibb.co/tz4MXQF/ezgif-com-gif-maker-2.png" alt="" />
                        </span>
                    </span>
                    <span className=''>
                        <h2 className='mt-2 text-left text-white font-black'>Consulting </h2>
                        <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                    </span>
                </div>



            </div>

            {/*=========================== Goal end content =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-36'>
                <div className='w-full p-4'>
                    <h2 className='text-center text-white text-2xl sm:text-5xl sm:text-left'> Innovative Approach</h2>
                    <p className='inline-block text-white align-middle p-4 text-justify sm:text-left pt-3'>Duis accumsan, neque at hendrerit sagittis, elit diam sodales nunc, at auctor leo purus sodales nunc. Maecenas ac lorem sit amet ligula viverra gravida non vel tortor. Phasellus dapibus leo non iaculis ultricies.
                    </p>
                </div>
                <div className='w-full p-4'>
                    <img className=' w-full' src="https://i.ibb.co/dbqvNrX/home-img-right.jpg" alt="" />
                </div>
            </div>

            {/*=========================== Experts=======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-32'>
                <div className='w-full p-4'>
                    <h2 className='text-center text-white text-2xl sm:text-5xl sm:text-left'> Digital experts </h2>
                    <p className='text-left text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur quos, hic quo laborum voluptatem ipsam odio aperiam esse commodi, dolorem, iste architecto quae ipsum ut dicta reiciendis quam dolorum.
                    </p>
                </div>
                <div className='w-full p-4'>

                    <div class="p-8 w-full ">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-400 font-black "> Development</span>
                            <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">60%</span>
                        </div>

                        <div class="w-full bg-slate-100 h-2 mb-6 mt-2">
                            <div class="bg-teal-400 h-2 rounded" style={{ width: "60%" }}></div>
                        </div>

                        <div class="flex items-center justify-between">
                            <span class="text-slate-400 font-black ">Design</span>
                            <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">85%</span>
                        </div>

                        <div class="w-full bg-slate-100 h-2 mb-6 mt-2">
                            <div class="bg-teal-400 h-2 rounded" style={{ width: "85%" }}></div>
                        </div>

                        <div class="flex items-center justify-between">
                            <span class="text-slate-400 text-sm text-slate-500">Progress 3</span>
                            <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">50%</span>
                        </div>

                        <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                            <div class="bg-teal-400 h-1 rounded" style={{ width: "55%" }}></div>
                        </div>

                        <div class="flex items-center justify-between">
                            <span class="text-slate-400 text-sm text-slate-500">Progress 4</span>
                            <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">75%</span>
                        </div>

                        <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                            <div class="bg-teal-400 h-1 rounded" style={{ width: "75%" }}></div>
                        </div>

                        <div class="flex items-center justify-between">
                            <span class="text-slate-400 text-sm text-slate-500">Progress 5</span>
                            <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">100%</span>
                        </div>

                        <div class="w-full bg-slate-100 h-1 mt-2">
                            <div class="bg-teal-400 h-1 rounded" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===========================   showcase your business=======================*/}
            <div >
                <div className='flex flex-col md:flex-row justify-between items-center  mt-36'>
                    <div class="w-64 h-64 overflow-hidden">
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/bdDjSMb/home-work-01-crop-u15974.jpg" alt="Your image" />
                    </div>
                    <div class="w-64 h-64 overflow-hidden">
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/vqKB8FW/home-work-02-crop-u18578.jpg" alt="Your image" />
                    </div>
                    <div class="w-64 h-64 overflow-hidden">
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/dpFmsjM/home-work-03-crop-u18631.jpg" alt="Your image" />
                    </div>
                    <div class="w-64 h-64 overflow-hidden">
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/wKw0GgT/home-work-04-crop-u18684.jpg" alt="Your image" />
                    </div>
                </div>
                <h2 className='text-white text-center font-black my-5'>Want to showcase your business?</h2>

                <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Contact Us</span>
                </button>
            </div>
            
            {/*=========================== Briefing =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-32'>
               
                <div className="relative">
                    <span className="w-16 top-0 h-16 bg-zinc-500 flex justify-center items-center">
                        <h2 classname="font-black text-white text-5xl">1</h2>
                    </span>
                </div>
                <div className="w-72 h-72 border rounded p-7 absolute">
                    <h2 classNamne="text-black">Brifing</h2>
                    <p className="text-white">Donec mattis odio dui, eget congue diam tempus a. Proin sed urna et purus fringilla facilisis.</p>
                </div>
            </div>

        </div>
    );
};

export default DigitalBrand;



        //   <img src="https://i.ibb.co/YNv6Tvc/01.png"/>
        //   <img src="https://i.ibb.co/8s6BN0m/5810609.png" />
        //   img src="https://i.ibb.co/pjqRNzZ/5806461.png" />
