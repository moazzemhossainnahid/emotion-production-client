import React from 'react';
const UiUxService = () => {

    const image = "https://i.ibb.co/7Q7PHrd/5726865.png";
    const logo = "https://i.ibb.co/W0MzfHS/Ellipse-12.png";

    return (
        <div className="container px-7 mx-auto w-full text-white">
            <div className='flex flex-col md:flex-row justify-between items-center mt-14'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 className='text-center text-2xl sm:text-5xl sm:text-left'>leading provider of
                        UI/UX design development
                        services</h2>
                    <p className='text-center sm:text-left pt-3'>Emotion continues to place a lot of emphasis on UI/UX Design development. For platforms
                        such as Android, iOS, desktops, and others, we create UI/UX. We rely on our technically
                        proficient skilled developers to be able to comprehend your ideas and give them life. To meet
                        the demands of each project, we provide cutting-edge research, HCD UI & UX design, and
                        application development. For examples of dozens of unique and effective UI/UX for Android,
                        iOS, desktop, and other platforms, visit our portfolio.</p>
                </div>
                <div className='w-full p-4'>
                    <img className=' w-full' src={image} alt="" />
                </div>
            </div>

            <div className='  mt-14'>
                <h2 className='text-center text-3xl sm:text-6xl sm:text-left'>WHAT WE DO</h2>
                <h1 className='text-center text-2xl sm:text-4xl sm:text-left'>We Design Visually Stunning &
                    User-Friendly Customer Experience.</h1>
                <p className='text-left'>With a distinct staff of User interface (UI) Designers, User Experience (UX) Designers,
                    Graphic Designers, and Animators, Emotion's Design section operates as a separate wing.</p>
            </div>

            <div className='sm:flex inline-block justify-center items-center mt-14 '>
                <div className=' w-full '>
                    <h2 className='text-center text-3xl sm:text-6xl sm:text-left'>UI/UX for Mobile & Web</h2>
                    <p className='text-center pr-5 sm:text-left'>We adhere to industry norms and develop UI/UX using design
                        standards. Our UI/UX design services include the following:</p>

                    <div className="space-y-1">
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">UI Design</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">UX Design</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Interaction Design</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Prototyping </a></li>
                    </div>


                </div>
                <div>
                    <img className=' w-full' src="https://i.ibb.co/KqBW8rM/5810325.png" alt="" />

                </div>
            </div>
            <div className='sm:flex inline-block justify-center items-center mt-14'>
                <div className="mt-4">
                    <img className='sm:w-10/12 mb-10 w-full ' src="https://i.ibb.co/YNv6Tvc/01.png" alt="" />
                    <img className='sm:w-10/12 w-full' src="https://i.ibb.co/pjqRNzZ/5806461.png" alt="" />
                </div>
                <div className='mt-4'>
                    <img className='sm:w-10/12 w-full' src="https://i.ibb.co/8s6BN0m/5810609.png" alt="" />
                </div>
            </div>

            <div className='mt-20  pb-28 discus'>
                <h3 className='text-center text-white pt-28 text-xl'>
                    Let's Discuss Your Project
                </h3>
                <p className='text-center text-xl pt-5 pb-5'>
                    Get a free consultation and share your project concept with us
                    so we can transform it into a fantastic digital product.
                </p>
                <button className='text-center p-3 border text-white border-white rounded-lg'>Talk To Our Experts</button>

            </div>

            <div className='mb-16 mt-20'>
                <h2 className='sm:text-center text-2xl sm:text-4xl text-left' >DESIGNING TOOLS WE USE</h2>
                <div className="sm:flex inline-block justify-around items-center">
                    <div>
                        <p className='text-left'>UI/UX</p>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Sketch</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Adob XD</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Photoshop</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Illustrator </a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Figma </a></li>
                    </div>
                    <div>
                        <p className='text-left'>Prototyping</p>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Adob XD</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Invision Studio</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Figma</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Sketch </a></li>
                    </div>
                    <div>
                        <p className='text-left'>Illustrator& Graphic Design</p>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Illustrator</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Photoshop</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Sketch </a></li>
                    </div>
                </div>
            </div>
            {/* <div className="sm:flex inline-block justify-around items-center"> */}
            <div className="grid grid-cols-2 mb-20 sm:grid-cols-5 place-items-center gap-4">
                <img className='w-24' src="https://i.ibb.co/QfYhx1P/ezgif-com-gif-maker.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/Y8cfKgX/ezgif-com-gif-maker-1.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/BnNHcJz/ezgif-com-gif-maker-2.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/BgqkZXZ/sketch.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/S3XcPhs/figma.png" alt="" />
            </div>

            <div className=" service mb-36">
                <h2 className="text-center">Our Services</h2>
                <p className="text-center p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,.</p>
                <div className='grid grid-cols-1 mt-16 sm:grid-cols-4 place-items-center gap-4'>
                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/L6Jkztx/Path-2.png" alt="" />
                            <button className="text-white text-xl">Digital Brand</button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src=" https://i.ibb.co/9bzLHG5/Group-792.png" alt="" />
                            <button className="text-white text-xl">Web Design </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src=" https://i.ibb.co/XkFg5PV/package-box.png" alt="" />
                            <button className="text-white text-xl">Packaging </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/k9pRjt1/animation.png" alt="" />
                            <button className="text-white text-xl">Animation </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/pZtx1mq/Design-32.png" alt="" />
                            <button className="text-white text-xl">Content Shooting </button>
                        </div>
                    </div>
                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/zP51JbF/ux-design.png" alt="" />
                            <button className="text-white text-xl">UX UI Design  </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 rounded-2xl bg-info">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/0V2cnpt/prototype.png" alt="" />
                            <button className="text-white text-xl">Prototyping  </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" blog mb-36">
                {/* <h2 className="text-center text-white">Blog</h2> */}
                <h4 className='sm:text-center text-white text-2xl sm:text-4xl text-left' >Blog</h4>
                <p className="text-center p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s.</p>
                <div className='grid grid-cols-1 mt-16 sm:grid-cols-3 place-items-center gap-4'>
                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/jJktgyT/JOR08679.png" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/jJktgyT/JOR08679.png" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/jJktgyT/JOR08679.png" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='flex justify-end items-center '>
                    <a href="">View All
                        <span className='text-white text-3xl font-black'>&#8594;</span>
                    </a>
                </span>
            </div>



        </div>
    );
};

export default UiUxService;