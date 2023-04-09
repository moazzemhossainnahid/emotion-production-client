import React from 'react';
import Slider from "react-slick";
import categories from '../../../Data/Categories'
import { useState } from 'react';
import { FaArrowRight, FaPlus, FaStar } from "react-icons/fa";

const Accessories = () => {
    const [data, setData] = useState(categories);
    console.log(data);
    const filterResult = (catItem) => {
        const result = categories.filter((a) => {
            return a.category === catItem;
        });
        setData(result);
    }

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

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings1 = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings2 = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplaySpeed: 3000,
        rows: 1,
        slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return (
        <div className='container mx-auto'>
            <div className='mt-20'>
                <Slider {...settings}>
                    <div>
                        <img src={"https://i.ibb.co/3dtzRwC/SL-100321-45940-56.jpg"} alt='' />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/Fgn9XY0/20314239-SL-062121-43900-81.jpg"} alt='' />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/TtNThMm/20023212-SL-091320-34930-27.jpg"} alt='' />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/4V42gZr/34532469-sl-100622-53160-19.jpg"} alt='' />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/nzrmRdQ/33818883-sl-100622-53160-51.jpg"} alt='' />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/hfkbycZ/34085711-sl-100622-53160-07-1.jpg"} alt='' />
                    </div>

                    <div>
                        <img src={"https://i.ibb.co/stXzZpY/10467516-9127.jpg"} alt='' />
                    </div>
                    {/* <div>
                        <img src={"https://i.ibb.co/k5xKh2z/11052989-3062.jpg"} />
                    </div> */}
                    {/* <div>
                        <img src={"https://i.ibb.co/M5mSGJJ/18774188-6024960.jpg"} />
                    </div> */}
                </Slider>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-around items-center my-24'>
                <div className='flex justify-between items-center w-96 bg-stone-900	p-3 mx-auto'>
                    <div className='w-1/2'>
                        <h2 className='text-white text-left font-black text-xl '>25% OFFER ON HINKING PRODUCT</h2>
                        <button className='text-white hover:bg-black p-3 mt-10 flex justify-start'>View Collection</button>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full p-2' src="https://i.ibb.co/Y73WJzG/online-shopping.png" alt="" />
                    </div>
                </div>

                <div className='flex justify-between items-center w-96 bg-stone-900	p-3 mx-auto'>
                    <div className='w-1/2'>
                        <h2 className='text-white text-left font-black text-xl '>OFFER IN ACCESSORIES </h2>
                        <button className='text-white hover:bg-black p-3 mt-10 flex justify-start'>View Collection</button>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full p-2' src="https://i.ibb.co/NnMJkHh/car.png" alt="" />
                    </div>
                </div>



                <div className='flex justify-between items-center w-96 bg-stone-900	p-3 mx-auto'>
                    <div className='w-1/2'>
                        <h2 className='text-white text-left font-black text-xl '>CLASSIX SERVICE COLLECTIONS</h2>
                        <button className='text-white hover:bg-black p-3 mt-10 flex justify-start'>View Collection</button>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full p-2' src="https://i.ibb.co/YytHML0/online-shop.png" alt="" />
                    </div>
                </div>


            </div>

            <div>
                <h2 style={{ fontFamily: "Rajdhani" }} className='text-3xl md:text-5xl text-center text-white font-black mb-5'>TOP CATEGORIES</h2>
                <p className='text-white text-center'>Find an good bike for your movement & go anywhere</p>
                <div className='flex flex-col md:flex-row gap-3 w-full mx-auto justify-center items-center mt-7'>
                    <button className='text-white bg-black p-3 mr-3' onClick={() => setData(categories)} >All Engineer </button>
                    <button className='text-white bg-black p-3 mr-3 ' onClick={() => filterResult('Mobile')}>Mobile App</button>
                    <button className='text-white bg-black p-3 mr-3' onClick={() => filterResult('Web')}>Web App</button>
                    <button className='text-white bg-black p-3 mr-3' onClick={() => filterResult('Uxui')}>Ux/Ui Design</button>
                    <button className='text-white bg-black p-3 ' onClick={() => filterResult('Animation')}>Animation </button>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-around items-center mt-5'>
                        {data.map((values) => {
                            const { id, name, picture, balance } = values;
                            return (
                                <>
                                    <div className='w-72 mx-auto bg-stone-900 ' key={id}>
                                        <span className=''>
                                            <img className='' src={picture} alt="" />
                                        </span>
                                        <div className='mt-3 border-t-sky-100 px-5 py-3'>
                                            {/* <p className='mt-5 text-white font-sans text-left mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi, consectetur quod asperiores sint minima ea sit provident aliquam possimus quo fugiat eum fuga. Ex deserunt officiis totam labore quasi!</p> */}
                                            <h2 className='text-left text-white font-black  text-xl'>{name}</h2>
                                            <p className='text-white my-1 text-left '>${balance}</p>
                                            <div className="flex gap-2">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            {/* <button className='flex justify-end text-white px-4 text-xl font-black rounded bg-gray-600'>Hire</button> */}
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
                <li className='flex cursor-pointer pt-10 group justify-center hover:text-gray-500 mt-6 items-center text-white text-2xl p-1'>
                    <div className="flex group-hover:bg-red-600 group-hover:text-white duration-300 py-2 px-5">
                        <span className="">More Products</span>
                        <span className="m-2 group-hover:translate-x-4 duration-200"><FaPlus /></span>
                    </div>
                </li>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-7 py-20'>
                <div className='w-full md:w-1/2 mx-auto'>
                    <div className="bg-[url('https://vonica.themekitify.com/wp-content/uploads/2023/02/m1_banner_04.jpg')] saturate-50 hover:saturate-100 duration-300 bg-cover bg-center h-96 relative">
                        <div className=" flex flex-col w-5/6 mx-auto h-full justify-center items-center text-white text-center">
                            <h1 style={{fontFamily:"Rajdhani"}} className="text-4xl font-bold uppercase text-left mb-4">Speak to The Team</h1>
                            <p className="text-lg text-center mb-8">Paragraph here Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" className="border p-1 text-white font-bold py-2 px-4 rounded py-4 px-8 hover:bg-gray-200 hover:text-gray-600 ">
                                Get In Touch
                            </a>
                        </div>
                    </div>


                </div>
                <div className='w-full md:w-1/2 mx-auto'>
                    <div className="bg-[url('https://vonica.themekitify.com/wp-content/uploads/2023/02/m1_banner_05.jpg')] saturate-50 hover:saturate-100 duration-300 bg-cover bg-center h-96 relative">
                        <div className=" flex flex-col w-5/6 mx-auto h-full justify-center items-center text-white text-center">
                        {/* <img decoding="async" src="https://vonica.themekitify.com/wp-content/uploads/2023/02/m1_banner_05.jpg" alt="m1_banner_05" class="kitify-banner__img"/> */}
                            <h1 style={{fontFamily:"Rajdhani"}} className="text-4xl font-bold uppercase text-left mb-4">Mountain Bike Guide</h1>
                            <p className="text-lg text-center mb-8">Paragraph here Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" className="border  text-white font-bold py-4 px-8 hover:bg-gray-200 hover:text-gray-600  rounded">
                                Discover Now
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className=''>
                <Slider {...settings1}>
                    <div>
                        <img src={"https://i.ibb.co/Vg3c2Gr/template-3.jpg"} />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/WtVVggM/template-4.jpg"} />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/qyS0qY6/template.jpg"} />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/F5F7d9g/template-1.jpg"} />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/D8sgq1q/template-2.jpg"} />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/xjNv4hZ/template-8.jpg"} />
                    </div>

                    <div>
                        <img src={"https://i.ibb.co/tL60m6t/template-5.jpg"} />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/C1LGSxz/template-6.jpg"} />
                    </div>
                    <div>
                        <img src={" https://i.ibb.co/pZT8Ynp/template-7.jpg"} />
                    </div>
                </Slider>
            </div>

            <div className='flex my-24 justify-center items-center bg-stone-900'>
                <div className='w-3/12 ml-3'>
                    <h2 className='text-white text-left font-black text-4xl'>TOP BRAND</h2>
                    <p className='text-gray-400 text-left'> 1000+ Brand Collections</p>
                </div>
                <div className='w-9/12'>
                    <Slider {...settings2}>
                        <div >
                            <img src={"https://i.ibb.co/f9qrS80/28093-5-nike-logo-image.png"} />
                        </div>
                        <div>
                            <img src={"https://i.ibb.co/yFMPcQ5/28153-3-rolex-logo-hd.png"} />
                        </div>
                        <div>
                            <img src={"https://i.ibb.co/60W3NLn/29092-5-reebok-logo-photos.png"} />
                        </div>
                        <div>
                            <img src={" https://i.ibb.co/K9KFCyg/31331-5-mcdonalds-photo.png"} />
                        </div>
                        <div>
                            <img src={" https://i.ibb.co/sv2NRFz/33078-5-burberry-logo-file.png"} />
                        </div>
                        <div>
                            <img src={"https://i.ibb.co/nBGzcbv/36795-7-coca-cola-file.png"} />
                        </div>

                        <div>
                            <img src={"https://i.ibb.co/vhMdz8m/63287-taylor-adidas-all-stars-converse-chuck-sneakers-shoe.png"} />
                        </div>
                        <div>
                            <img src={"https://i.ibb.co/PhP49F5/72478-logo-eyecare-puma-tamas-adidas-free-clipart-hq.png"} />
                        </div>
                        <div>
                            <img src={"https://i.ibb.co/YcVdCbx/24116-3-starbucks-logo-transparent-image.png"} />
                        </div>
                    </Slider>
                </div>
            </div>

            <div className='flex mb-16 justify-around gap-10 items-center '>
                <div className='flex my-20 justify-around items-center border p-3 border-stone-900'>
                    <div>
                        <h2 className='text-white text-left font-black text-xl'>ON DEMAND PRICING</h2>
                        <p className='text-gray-400 text-left'> Make $20 order</p>
                    </div>
                    <div> <img className='p-3 ml-2' src="https://i.ibb.co/Lzgsf2j/ezgif-com-gif-maker-3.png" alt="" /></div>
                </div>

                <div className='flex my-20 justify-around items-center border p-3 border-stone-900'>
                    <div>
                        <h2 className='text-white text-left font-black text-xl'>QUALITY PRODUCTS</h2>
                        <p className='text-gray-400 text-left'> We made for you</p>
                    </div>
                    <div> <img className='p-3 ml-2' src="https://i.ibb.co/znv3CpL/ezgif-com-gif-maker-2.png" alt="" /></div>
                </div>

                <div className='flex my-20 justify-around items-center border p-3 border-stone-900'>
                    <div>
                        <h2 className='text-white text-left font-black text-xl'>BEST BUILT QUALITY </h2>
                        <p className='text-gray-400 text-left'> Its gurantee</p>
                    </div>
                    <div> <img className='p-3 ml-2' src="https://i.ibb.co/Mnp284M/ezgif-com-gif-maker.png" alt="" /></div>
                </div>

                <div className='flex my-20 justify-around items-center border p-3 border-stone-900'>
                    <div>
                        <h2 className='text-white text-left font-black text-xl'>24/7 ONLINE SUPPORT </h2>
                        <p className='text-gray-400 text-left'> We are here </p>
                    </div>
                    <div> <img className='p-3 ml-2' src="https://i.ibb.co/Lzgsf2j/ezgif-com-gif-maker-3.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;



