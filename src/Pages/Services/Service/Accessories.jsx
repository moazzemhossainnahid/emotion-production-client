import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaBox, FaBoxes,  FaCheck, FaChevronDown, FaChevronUp, FaCut, FaEnvelope, FaPhone, FaTruck, } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const questions = [
    {
        id: 1,
        question: "What is Tailwind?",
        answer:
            "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. Tailwind is designed for building modern web applications, and it is ideal for building complex, responsive user interfaces.",
    },
    {
        id: 2,
        question: "What are the benefits of using Tailwind?",
        answer:
            "Tailwind saves development time and increases productivity. It provides a robust set of utility classes that allows you to style your components without writing custom CSS. It also allows you to easily create responsive designs that work on all devices.",
    },
    {
        id: 3,
        question: "How do I install Tailwind in my project?",
        answer:
            "You can install Tailwind in your project using npm or yarn. First, create a new project or navigate to an existing project, then run the following command: npm install tailwindcss. After installing Tailwind, you need to create a configuration file by running the following command: npx tailwindcss init. This will create a tailwind.config.js file that you can customize to your needs.",
    },
];
// https://i.ibb.co/nQH4Mz2/portrait-of-young-businesswoman-e1655091152346.jpg
// https://i.ibb.co/FwpKrW1/young-businessman-smiling-and-looking-at-camera-e1655090996491.jpg
// https://i.ibb.co/6m7BMSy/causal-young-two-businessman-looking-camera-and-front-of-information-room-e1655090842204.jpg
// const slides = [
//     {
//         name: 'Jhon Doe',
//         title: 'Client',
//         profile: 'https://i.ibb.co/nQH4Mz2/portrait-of-young-businesswoman-e1655091152346.jpg',
//         content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto',
//         logo: 'https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png',
//         review: 'https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png'
//     },
//     {
//         name: 'William Boer',
//         title: 'Client',
//         profile: 'https://i.ibb.co/FwpKrW1/young-businessman-smiling-and-looking-at-camera-e1655090996491.jpg',
//         content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto',
//         logo: 'https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png',
//         review: 'https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png'
//     },
//     {
//         name: 'Jessica Fins',
//         title: 'Client',
//         profile: 'https://i.ibb.co/6m7BMSy/causal-young-two-businessman-looking-camera-and-front-of-information-room-e1655090842204.jpg',
//         content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto',
//         logo: 'https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png',
//         review: 'https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png'
//     },
// ];



const Accessories = () => {
    const [counter, setCounter] = useState(0);

    const settings1 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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

    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleQuestionClick = (id) => {
        if (activeQuestion === id) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(id);
        }
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div >
            <div className='container mx-auto'>
                {/*====================================== Food Packaging  =============================*/}
                <div className='flex flex-col md:flex-row justify-around items-center  mt-10 mb-24 '>
                    {/*====================================== Food Packaging Left side  =============================*/}
                    <div className="w-4/6 mx-auto">
                        <h2 className="text-left text-3xl  font-bold text-white">About Food Packaging</h2>
                        <p className='text-white text-left mt-5  pr-9  '>Pellentesque et scelerisque nunc. Sed vel ipsum auctor, iaculis arcu quis, posuere dui. Duis condimentum nunc metus, maximus porta velit temporin. Intincidunt leo viverra, sodales ex eu, posuere purus. Duis in augue vestibulum, aliquet nulla vitae</p>

                        <div className=" ">
                            <Slider {...settings}>
                                <div>
                                    <img src="https://i.ibb.co/ryhpJTS/paper-bags-with-take-away-food-and-coffee-cups-containers-1-e1656316684658-1.jpg" alt="slide 1" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/QHgrXcr/paper-bags-with-take-away-food-and-coffee-cups-containers-1-e1656316684658.jpg" alt="slide 2" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/X2fwh5P/the-idea-of-packaging-and-gift-a-box-for-an-autumn-or-winter-gift-with-sweets-and-dried-vegetables-1.jpg" alt="slide 3" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/GsKkLM2/the-idea-of-packaging-and-gift-a-box-for-an-autumn-or-winter-gift-with-sweets-and-dried-vegetables-e.jpg" alt="slide 1" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/Sm2ptTT/packages-of-sweet-dried-fruit-e1656317146758-1.jpg" alt="slide 2" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/r6Wx73b/packages-of-sweet-dried-fruit-e1656317146758.jpg" alt="slide 3" />
                                </div>
                            </Slider>
                        </div>
                        <div className='mt-9 flex justify-around items-center'>
                            <div>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>
                                    <span> <h3 className='text-white font-mono font-bold ml-3'>Design Packaging</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>
                                    <span> <h3 className='text-white font-mono font-bold ml-3'>High quality Materials </h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>
                                    <span> <h3 className='text-white font-mono font-bold ml-3'>Food Grade </h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>
                                    <span> <h3 className='text-white font-mono font-bold ml-3'>100% recyclable  </h3></span>
                                </li>
                            </div>

                            <div>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>                            <span> <h3 className='text-white font-bold font-mono ml-3'>Flexible & Cost-Effective</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>                            <span> <h3 className='text-white font-bold font-mono ml-3'>VIP & Annual Pass Programs</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>                            <span> <h3 className='text-white font-bold font-mono ml-3'>Over 250,000 cleans</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaCheck className='text-white' /> </span>                            <span> <h3 className='text-white  font-mono font-bold ml-3'>Satisfaction Guarantee</h3></span>
                                </li>
                            </div>
                        </div>
                        <p className='text-white text-left mt-3  pr-9 divide-y-4 divide-sky-400  '>Pellentesque et scelerisque nunc. Sed vel ipsum auctor, iaculis arcu quis, posuere dui. Duis condimentum nunc metus, maximus porta velit temporin. Intincidunt leo viverra, sodales ex eu, posuere purus. Duis in augue vestibulum</p>
                        <hr
                            class="my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                        <div className='grid grid-cols-1  sm:grid-cols-3 place-items-center   gap-24'>
                            <div className=''>
                                <span >
                                    <img className='hover:p-1' src="https://i.ibb.co/SBxcwVG/ezgif-com-gif-maker.png" alt="" />
                                </span>
                                <span className=''>
                                    <h2 className='mt-2 text-left text-white font-black'>Best Quality</h2>
                                    <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                                </span>
                            </div>

                            <div className=''>
                                <span className=''>
                                    <img className='hover:p-1' src="https://i.ibb.co/sQPTxd2/ezgif-com-gif-maker-1.png" alt="" />
                                </span>
                                <span className=''>
                                    <h2 className='mt-2 text-left text-white font-black'>Creative Design </h2>
                                    <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                                </span>
                            </div>

                            <div className=''>
                                <span>
                                    <img className='hover:p-1' src="https://i.ibb.co/8DFvvBd/ezgif-com-gif-maker-4.png" alt="" />
                                </span>
                                <span className=''>
                                    <h2 className='mt-2 text-left text-white font-black'>Eco Friendly</h2>
                                    <p className='text-white text-left '>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.</p>
                                </span>
                            </div>

                        </div>

                    </div>
                    {/*====================================== Food Packaging Left side  =============================*/}
                    <div className="w-2/6 -mt-44 ">
                        <div className='w-80   mx-auto border-box-5 opacity-100  bg-white shadow-2xl shadow-slate-100/50 p-4 rounded border'>
                            <h2 className='text-black text-center text-2xl mb-5 font-bold'>This Service Included</h2>
                            <li className='flex justify-start items-center mb-3'>
                                <span> <FaCut className='text-red-950' /> </span>
                                <span> <h3 className='text-black font-bold ml-3'>V-Cute</h3></span>
                            </li>
                            <li className='flex justify-start items-center mb-3'>
                                <span> <FaBox className='text-red-950' /> </span>
                                <span> <h3 className='text-black font-bold ml-3'>Finish</h3></span>
                            </li>
                            <li className='flex justify-start items-center mb-3'>
                                <span> <FaTruck className='text-red-900' /> </span>
                                <span> <h3 className='text-black font-bold ml-3'>Delivery</h3></span>
                            </li>
                            <li className='flex justify-start items-center mb-5'>
                                <span> <FaBoxes className='text-red-900' /> </span>
                                <span> <h3 className='text-black font-bold ml-3'>500 pcs Packaging</h3></span>
                            </li>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className='mt-5'>
                            <div className="w-80  h-80 mx-auto relative bg-cover bg-center  flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/7t7L7Zw/background.jpg')" }}>
                                <div className="absolute text-white text-center background">
                                    <h1 className="text-3xl font-bold mb-4">Need For Some Help ?</h1>
                                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>

                                    <div className=''>
                                        <li className='flex justify-start items-center mb-6 pl-3'>
                                            <span>
                                                <FaPhone className='text-4xl mr-5' />
                                            </span>
                                            <span >
                                                <h2 className='text-left text-4xl' >Phone</h2>
                                                <p>(+62) 8152 254 239</p>
                                            </span>
                                        </li>

                                        <li className='flex justify-start items-center pl-3'>
                                            <span>
                                                <FaEnvelope className='text-4xl mr-5' />
                                            </span>
                                            <span >
                                                <h2 className='text-left text-4xl' >Email</h2>
                                                <p>support@domain.com</p>
                                            </span>
                                        </li>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/*====================================== Why Us section  =============================*/}
                <div className='flex flex-col md:flex-row justify-around items-center  mt-24 mb-24 '>

                    <div className="w-1/2  h-screen mx-auto relative bg-cover bg-center  flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/7t7L7Zw/background.jpg')" }}>
                        <div className="absolute text-white text-center bottom-0 left-0 w-96 bg-red-950">
                            <h1 className="text-2xl text-left font-bold p-3 ">We Production Best Packaging!</h1>
                            <p className='mb-4  text-left p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellat velit quod aliquam nesciunt eum labore! Aperiam ut temporibus praesentium! Maxime possimus totam velit numquam distinctio mollitia ab non eveniet! Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            <li className='list-none text-2xl flex p-3 hover:text-green-900 hover:p-4 items-center text-left '><a href="#">View Project</a>
                                <FaArrowRight className='ml-3' />
                            </li>
                        </div>
                    </div>


                    <div className='w-1/2 ml-5'>
                        <h1 className="text-2xl text-left font-bold p-3 text-white ">Accelerating Innovations In Packaging</h1>
                        <p className='mb-4  text-left p-3 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellat velit quod aliquam nesciunt eum labore! Aperiam ut temporibus praesentium! Maxime possimus totam velit numquam distinctio mollitia ab non eveniet! Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <div className='mb-3'>
                            <li className='list-none text-2xl flex p-3 text-white items-center text-left '>
                                <img className='w-10 ' src="https://i.ibb.co/680ZbjT/Asset-1.png" alt="" />
                                <h1 className='ml-4 font-black'>Best Quality Of Packaging</h1>
                            </li>
                            <p className='text-white text-left text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta eum molestias libero saepe? Quis voluptatum blanditiis ea, soluta aspernatur perferendis pariatur inventore dolorum enim atque, voluptatibus, magni nemo corporis.\</p>
                            <hr
                                class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                        </div>

                        <div className='mb-3'>
                            <li className='list-none text-2xl flex p-3 text-white items-center text-left '>
                                <img className='w-10 ' src="https://i.ibb.co/64dyypp/Asset-3.png" alt="" />
                                <h1 className='ml-4 font-black'>Creative Packaging</h1>
                            </li>
                            <p className='text-white text-left text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta eum molestias libero saepe? Quis voluptatum blanditiis ea, soluta aspernatur perferendis pariatur inventore dolorum enim atque, voluptatibus, magni nemo corporis.\</p>
                            <hr
                                class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                        </div>

                        <div className='mb-3'>
                            <li className='list-none text-2xl flex p-3 text-white items-center text-left '>
                                <img className='w-10 ' src="https://i.ibb.co/r2f49yF/Asset-2.png" alt="" />
                                <h1 className='ml-4 font-black'>Environmentally Friendly</h1>
                            </li>
                            <p className='text-white text-left text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta eum molestias libero saepe? Quis voluptatum blanditiis ea, soluta aspernatur perferendis pariatur inventore dolorum enim atque, voluptatibus, magni nemo corporis.\</p>
                            <hr
                                class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                        </div>
                    </div>


                </div>

                {/*====================================== Our Service section  =============================*/}
                <div className='mt-24 mb-24'>
                    <div className='flex flex-col md:flex-row justify-around items-center p-10 gap-10 '>
                        <div className='w-1/2'>
                            <h2 className='text-4xl text-left text-white mb-10'>We Provide Various Kinds Of Packaging</h2>
                            <div class='flex items-center justify-center mb-10'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/thh30Q0/Beef-mince-package-mockup-02.jpg" />
                                </div>
                            </div>

                            <div class='flex items-center justify-center '>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/0jtB354/7-View-dark-edition.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-white text-left mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco laboris sed</p>
                            <div class='flex items-center justify-center mb-10'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/p0P7q5D/Coffee-Pouch-Packaging-Mockup-01.jpg" />
                                </div>
                            </div>

                            <div class='flex items-center justify-center mb-10'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/C5dmKfG/noodle-box-mockup-07-2.jpg" />
                                </div>
                            </div>

                            <div class='flex items-center justify-center'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt=""
                                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/p0P7q5D/Coffee-Pouch-Packaging-Mockup-01.jpg" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <li className='list-none text-2xl text-white flex justify-center p-3 items-center text-center '><a href="#">Click Here</a>
                        <FaArrowRight className='ml-3' />
                    </li>

                    <div className='flex flex-col md:flex-row justify-around items-center mt-7 '>
                        <div className=''>
                            <h2 className='text-left text-white text-3xl'>Choose Your packaging</h2>
                            <p className='text-white text-left pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dignissimos optio placeat aperiam dolores non, totam enim minima officiis nisi quae odio amet dicta, suscipit ut qui tempora fuga! Et.</p>
                        </div>
                        <div className=''>
                            <h2 className='text-left text-white text-3xl'>Packaging Ready To Use</h2>
                            <p className='text-white text-left pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dignissimos optio placeat aperiam dolores non, totam enim minima officiis nisi quae odio amet dicta, suscipit ut qui tempora fuga! Et.</p>
                        </div>
                        <div className=''>
                            <h2 className='text-left text-white text-3xl'>Packaging In Process</h2>
                            <p className='text-white text-left pr-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dignissimos optio placeat aperiam dolores non, totam enim minima officiis nisi quae odio amet dicta, suscipit ut qui tempora fuga! Et.</p>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <div className='flex flex-col md:flex-row justify-around items-center  mt-24 mb-24 '>
                        <div className='w-1/2'>
                            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                                <div className="max-w-3xl mx-auto">
                                    <h2 className="text-3xl text-left font-extrabold text-white mb-3 sm:text-4xl">
                                        General Question
                                    </h2>
                                    <p className='text-white text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quis adipisci laudantium aliquam, accusamus expedita molestias, asperiores ratione tempora sed quae alias. Suscipit delectus aliquam excepturi sint, ut autem nihil!</p>
                                    <div className="mt-12">
                                        <dl className="space-y-8">
                                            {questions.map((q) => (
                                                <div key={q.id}>
                                                    <dt className="text-lg leading-6 font-medium bg-black  p-3 text-gray-900">
                                                        <button
                                                            onClick={() => handleQuestionClick(q.id)}
                                                            className="flex justify-between w-full text-left focus:outline-none"
                                                        >
                                                            <span className='text-white '>{q.question}</span>
                                                            <span className="ml-6 flex-shrink-0">
                                                                {activeQuestion === q.id ? (
                                                                    // <ChevronUpIcon
                                                                    //     className="h-5 w-5 text-gray-400"
                                                                    //     aria-hidden="true"
                                                                    // />

                                                                    <FaChevronUp
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    // <ChevronDownIcon
                                                                    //     className="h-5 w-5 text-gray-400"
                                                                    //     aria-hidden="true"
                                                                    // />

                                                                    <FaChevronDown
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </button>
                                                    </dt>
                                                    {activeQuestion === q.id && (
                                                        <dd className="mt-2 pr-12">
                                                            <p className="text-base text-white text-left">{q.answer}</p>
                                                        </dd>
                                                    )}
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2  h-screen mx-auto relative bg-cover bg-center  flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/jR65LZT/backgrounds.jpg')" }}>
                            <div className="absolute text-white text-center bottom-0 right-0 w-96 bg-red-950">
                                <h1 className="text-2xl text-left font-bold p-3 ">We Production Best Packaging!</h1>
                                <p className='mb-4  text-left p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellat velit quod aliquam nesciunt eum labore! Aperiam ut temporibus praesentium! Maxime possimus totam velit numquam distinctio mollitia ab non eveniet! Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                <li className='list-none text-2xl flex p-3 hover:text-green-900 hover:p-4 items-center text-left '><a href="#">View Project</a>
                                    <FaArrowRight className='ml-3' />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                {/*====================================== Testimonials Our Client Said  =============================*/}


            </div>
            <div className='flex flex-col md:flex-row justify-around items-center gap-16  mt-24 mb-24 '>
                <div className="w-full  h-screen mx-auto relative bg-cover bg-center  flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/tz7Fyxz/backgrounds12.jpg')" }}>
                  <div className='container mx-auto  '>
                  <div className='w-1/2 h-96  top-0 left-0 mt-48 ml-2 absolute  '>
                        <Slider {...settings1}>
                            <div className=' bg-yellow-950 p-5 '>
                                <p className='text-left text-white mb-4'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto</p>
                                <img className='w-24' src="https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png" alt="" />
                                <div className='flex justify-between items-center mt-5 p-3'>
                                    <div className='flex justify-around items-center'>
                                        <img className='w-16 rounded-full' src="https://i.ibb.co/nQH4Mz2/portrait-of-young-businesswoman-e1655091152346.jpg" alt="" />
                                        <span className='ml-2'>
                                            <h2 className='text-left text-3xl text-white'>Jhon Doe</h2>
                                            <p className='text-left text-white'>Client</p>
                                        </span>
                                    </div>
                                    <div>
                                        <img className='w-24' src="https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=' bg-red-950 p-5 '>
                                <p className='text-left text-white mb-4'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto</p>
                                <img className='w-24' src="https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png" alt="" />
                                <div className='flex justify-between items-center mt-5 p-3'>
                                    <div className='flex justify-around items-center'>
                                        <img className='w-16 rounded-full' src="https://i.ibb.co/6m7BMSy/causal-young-two-businessman-looking-camera-and-front-of-information-room-e1655090842204.jpg" alt="" />
                                        <span className='ml-2'>
                                            <h2 className='text-left text-3xl text-white'>Jessika Fins</h2>
                                            <p className='text-left text-white'>Client</p>
                                        </span>
                                    </div>
                                    <div>
                                        <img className='w-24' src="https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className=' bg-green-950 p-5 '>
                                <p className='text-left text-white mb-4'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto</p>
                                <img className='w-24' src="https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png" alt="" />
                                <div className='flex justify-between items-center mt-5 p-3'>
                                    <div className='flex justify-around items-center'>
                                        <img className='w-16 rounded-full' src="https://i.ibb.co/FwpKrW1/young-businessman-smiling-and-looking-at-camera-e1655090996491.jpg" alt="" />
                                        <span className='ml-2'>
                                            <h2 className='text-left text-3xl text-white'>William Boer</h2>
                                            <p className='text-left text-white'>Client</p>
                                        </span>
                                    </div>
                                    <div>
                                        <img className='w-24' src="https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='w-1/2 mt-48 p-16 absolute  top-0 right-0'>
                        <h2 className='text-5xl text-left text-red-950'>Our Client Said</h2>
                        <p className='text-left text-yellow-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet officia dolores excepturi commodi recusandae assumenda eaque deleniti autem explicabo ad minus ullam inventore suscipit ex maxime, earum quis distinctio rerum!</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;


// https://i.ibb.co/ryhpJTS/paper-bags-with-take-away-food-and-coffee-cups-containers-1-e1656316684658-1.jpg
// https://i.ibb.co/QHgrXcr/paper-bags-with-take-away-food-and-coffee-cups-containers-1-e1656316684658.jpg
// https://i.ibb.co/X2fwh5P/the-idea-of-packaging-and-gift-a-box-for-an-autumn-or-winter-gift-with-sweets-and-dried-vegetables-1.jpg
// https://i.ibb.co/GsKkLM2/the-idea-of-packaging-and-gift-a-box-for-an-autumn-or-winter-gift-with-sweets-and-dried-vegetables-e.jpg
// https://i.ibb.co/Sm2ptTT/packages-of-sweet-dried-fruit-e1656317146758-1.jpg
// https://i.ibb.co/r6Wx73b/packages-of-sweet-dried-fruit-e1656317146758.jpg


// https://i.ibb.co/p0P7q5D/Coffee-Pouch-Packaging-Mockup-01.jpg
// https://i.ibb.co/C5dmKfG/noodle-box-mockup-07-2.jpg
// https://i.ibb.co/G3ymxdX/Plastic-bottle-big-label-05-copy.jpg
// https://i.ibb.co/0jtB354/7-View-dark-edition.jpg
// https://i.ibb.co/thh30Q0/Beef-mince-package-mockup-02.jpg

 