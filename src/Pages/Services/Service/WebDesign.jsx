import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
// import '../../style.css'

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

            {/* <div className='mb-10'>
                <div>
                    <h2 className="text-left  text-white font-black">HTML</h2>
                    <ProgressBar
                        width="100%"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="25"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div className='mb-10'>
                    <h2 className="text-left  text-white font-black">CSS</h2>
                    <ProgressBar
                        width="100%"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="55"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div className='mb-10'>
                    <h2 className="text-left  text-white font-black">PHOTOSHOP</h2>
                    <ProgressBar
                        width="100%"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="75"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div className='mb-10'>
                    <h2 className="text-left  text-white font-black">ISSULATOR</h2>
                    <ProgressBar
                        width="100%"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="95"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
            </div> */}

            
            <div class="p-8 w-full ">
                <div class="flex items-center justify-between">
                    <span class="text-slate-400 text-sm text-slate-500">Progress 1</span>
                    <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">0%</span>
                </div>

                <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                    <div class="bg-teal-400 h-1 rounded" style={{width:"0%"}}></div>
                </div>

                <div class="flex items-center justify-between">
                    <span class="text-slate-400 text-sm text-slate-500">Progress 2</span>
                    <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">25%</span>
                </div>

                <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                    <div class="bg-teal-400 h-1 rounded" style={{width:"25%"}}></div>
                </div>

                <div class="flex items-center justify-between">
                    <span class="text-slate-400 text-sm text-slate-500">Progress 3</span>
                    <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">50%</span>
                </div>

                <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                    <div class="bg-teal-400 h-1 rounded" style={{width:"55%"}}></div>
                </div>

                <div class="flex items-center justify-between">
                    <span class="text-slate-400 text-sm text-slate-500">Progress 4</span>
                    <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">75%</span>
                </div>

                <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                    <div class="bg-teal-400 h-1 rounded" style={{width:"75%"}}></div>
                </div>

                <div class="flex items-center justify-between">
                    <span class="text-slate-400 text-sm text-slate-500">Progress 5</span>
                    <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">100%</span>
                </div>

                <div class="w-full bg-slate-100 h-1 mt-2">
                    <div class="bg-teal-400 h-1 rounded" style={{width:"100%"}}></div>
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

            <div className='flex flex-col md:flex-row justify-between items-center mt-40 mb-40'>
                {/* ============================== Basic =================== */}
                <div className='shadow-2xl shadow-blue-500/50 rounded border  bg-slate-800 sm:mb-0 mb-7 w-[300px]'>
                    <div className='p-3'>
                        <h1 className='text-white text-center text-2xl border-b font-black '>Basic</h1>
                        <div className="flex justify-between items-center my-2">
                            <h2 className='text-left font-normal'>Landing Page Design</h2>
                            <h2 className='text-3xl text-white'>$100</h2>
                        </div>
                        <p className="  ">Three Page Landing Design with Html and css lorem</p>
                        <div className="flex  justify-between items-center mt-24">
                            <div className="flex  justify-between items-center ">
                                <img className='p-1' src="https://img.icons8.com/ios-glyphs/20/12B886/timer.png" />
                                <h2 className=' text-xs	font-black'>1 Days Delivery</h2>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img className='p-1' src="https://img.icons8.com/external-goofy-solid-kerismaker/17/12B886/external-Revision-graphic-design-goofy-solid-kerismaker.png" />
                                <h2 className=' text-xs font-black'>Unlimited Revisions</h2>
                            </div>

                        </div>
                        <div className='mt-2 '>
                            <div className="flex justify-start items-center ">
                                <img src="https://img.icons8.com/ios/20/12B886/multiply.png" />
                                <h2 className='ml-2'>2 pages </h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Design customization</h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/ios/20/12B886/multiply.png" />
                                <h2 className='ml-2'>Content upload </h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Responsive design </h2>
                            </div>

                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Source code</h2>
                            </div>

                        </div>
                    </div>
                    <a className='flex items-center justify-between bg-black mt-5 p-2' href="" >
                        <h1 className='text-2xl text-center' >Continue</h1>
                        <span><img src="https://img.icons8.com/sf-black/30/12B886/long-arrow-right.png" /></span>
                    </a>
                </div>
                {/* ==============================standard  ================= */}
                <div className='shadow-2xl shadow-blue-500/50 rounded border  bg-slate-800 sm:mb-0 mb-7 w-[300px]'>
                    <div className='p-3'>
                        <h1 className='text-white text-center text-2xl border-b font-black '>Standard</h1>
                        <div className="flex justify-between items-center my-2">
                            <h2 className='text-left font-normal'>Minimum 10 Maximum 15 page Design</h2>
                            <h2 className='text-3xl text-white'>$100</h2>
                        </div>
                        <p className="  ">Three Page Landing Design with Html and css lorem</p>
                        <div className="flex  justify-between items-center mt-24">
                            <div className="flex  justify-between items-center ">
                                <img className='p-1' src="https://img.icons8.com/ios-glyphs/20/12B886/timer.png" />
                                <h2 className=' text-xs	font-black'>1 Days Delivery</h2>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img className='p-1' src="https://img.icons8.com/external-goofy-solid-kerismaker/17/12B886/external-Revision-graphic-design-goofy-solid-kerismaker.png" />
                                <h2 className=' text-xs font-black'>Unlimited Revisions</h2>
                            </div>

                        </div>
                        <div className='mt-2 '>
                            <div className="flex justify-start items-center ">
                                <img src="https://img.icons8.com/ios/20/12B886/multiply.png" />
                                <h2 className='ml-2'>2 pages </h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Design customization</h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/ios/20/12B886/multiply.png" />
                                <h2 className='ml-2'>Content upload </h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Responsive design </h2>
                            </div>

                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Source code</h2>
                            </div>
                        </div>
                    </div>
                    <a className='flex items-center justify-between bg-black mt-5 p-2' href="" >
                        <h1 className='text-2xl text-center' >Continue</h1>
                        <span><img src="https://img.icons8.com/sf-black/30/12B886/long-arrow-right.png" /></span>
                    </a>
                </div>
                {/*======================= Premium ========================== */}
                <div className='shadow-2xl shadow-blue-500/50 rounded border  bg-slate-800 sm:mb-0 mb-7 w-[300px]'>
                    <div className='p-3'>
                        <h1 className='text-white text-center text-2xl border-b font-black '>Premium</h1>
                        <div className="flex justify-between items-center my-2">
                            <h2 className='text-left font-normal'>Full Website Design</h2>
                            <h2 className='text-3xl text-white'>$100</h2>
                        </div>
                        <p className="  ">Three Page Landing Design with Html and css lorem</p>
                        <div className="flex  justify-between items-center mt-24">
                            <div className="flex  justify-between items-center ">
                                <img className='p-1' src="https://img.icons8.com/ios-glyphs/20/12B886/timer.png" />
                                <h2 className=' text-xs	font-black'>1 Days Delivery</h2>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img className='p-1' src="https://img.icons8.com/external-goofy-solid-kerismaker/17/12B886/external-Revision-graphic-design-goofy-solid-kerismaker.png" />
                                <h2 className=' text-xs font-black'>Unlimited Revisions</h2>
                            </div>

                        </div>
                        <div className='mt-2 '>
                            <div className="flex justify-start items-center ">
                                <img src="https://img.icons8.com/ios/20/12B886/multiply.png" />
                                <h2 className='ml-2'>2 pages </h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Design customization</h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/ios/20/12B886/multiply.png" />
                                <h2 className='ml-2'>Content upload </h2>
                            </div>
                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Responsive design </h2>
                            </div>

                            <div className="flex justify-start mt-1 items-center ">
                                <img src="https://img.icons8.com/material-outlined/18/12B886/checkmark--v1.png" />
                                <h2 className='ml-2'>Source code</h2>
                            </div>
                        </div>
                    </div>
                    <a className='flex items-center justify-between bg-black mt-5 p-2' href="" >
                        <h1 className='text-2xl text-center' >Continue</h1>
                        <span><img src="https://img.icons8.com/sf-black/30/12B886/long-arrow-right.png" /></span>
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-around items-center mt-24 mb-36'>
                <div className='bg-slate-800 p-6'>
                    <h2 className="text-5xl font-bold mb-3 text-left text-black">01.</h2>
                    {/* <h4 className="text-5xl text-left mb-3 text-white font-black">WEB DESIGN</h4> */}
                    <span className="flex justify-between items-center">
                        <h4 className="text-5xl text-white font-black mb-3 text-left">WEB DESIGN</h4>
                        <img className='w-24' src="https://i.ibb.co/1LcT7sF/download-removebg-preview.png" alt="" />
                    </span>
                    <p className="inline-block align-middle text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </p>
                </div>
                {/* <div className=' ml-2 mr-2 p-3 bg-cyan-500 shadow-lg shadow-cyan-500/50 py-5'>
                    <h2 className="text-5xl text-left font-bold mb-3  text-black">01.</h2>
                    <h4 className="text-5xl text-left mb-3 text-blue-900">WEB DESIGN</h4>
                    <p className="inline-block align-middle text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </p>
                </div> */}
                <div className='bg-slate-800 p-6'>
                    <h2 className="text-5xl text-left font-bold mb-3  text-black">02.</h2>
                    <span className="flex justify-between items-center">
                        <h4 className="text-5xl text-white font-black mb-3 text-left">APP DESIGN</h4>
                        <img className='w-16' src="https://i.ibb.co/7XBNx6k/5088-removebg-preview.png" alt="" />
                    </span>
                    <p className="inline-block align-middle text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </p>
                </div>
            </div>
            {/*======== Portfulio =============== */}
            <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center mb-36 gap-4'>
                <div class="group relative w-80">
                    <img class="w-full object-cover"
                        src="https://i.ibb.co/8s6BN0m/5810609.png" />
                    <div
                        class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-2xl text-white">Dashboard Design</h1>
                        <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Get it</a>
                    </div>
                </div>
                <div class="group relative w-80">
                    <img class="w-full object-cover"
                        src="https://i.ibb.co/pjqRNzZ/5806461.png" />
                    <div
                        class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-2xl text-white">Awosome Design</h1>
                        <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Get it</a>
                    </div>
                </div>
                <div class="group relative w-80">
                    <img class="w-full object-cover"
                        src="https://i.ibb.co/YNv6Tvc/01.png" />
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