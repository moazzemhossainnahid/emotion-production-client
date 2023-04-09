import React from 'react';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';


const ContentShotting = () => {
    const settings1 = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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

    return (
        <div className='container overflow-hidden mx-auto'>
            {/*=====================  carousel start =================*/}
            <div className='mt-5'>
                <Slider {...settings}>
                    <div>
                        <img src={"https://i.ibb.co/3dtzRwC/SL-100321-45940-56.jpg"} alt="" />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/Fgn9XY0/20314239-SL-062121-43900-81.jpg"} alt="" />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/TtNThMm/20023212-SL-091320-34930-27.jpg"} alt="" />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/4V42gZr/34532469-sl-100622-53160-19.jpg"} alt="" />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/nzrmRdQ/33818883-sl-100622-53160-51.jpg"} alt="" />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/hfkbycZ/34085711-sl-100622-53160-07-1.jpg"} alt="" />
                    </div>
                    <div>
                        <img src={"https://i.ibb.co/stXzZpY/10467516-9127.jpg"} alt="" />
                    </div>
                    {/* <div>
                        <img src={"https://i.ibb.co/k5xKh2z/11052989-3062.jpg"} />
                    </div> */}
                    {/* <div>
                        <img src={"https://i.ibb.co/M5mSGJJ/18774188-6024960.jpg"} />
                    </div> */}
                </Slider>
            </div>

            {/*=====================  creative start =================*/}
            <div className=' my-24'>
                <h2 className='text-4xl text-center font-black text-white'>WE ARE CREATIVE WE ARE XEN</h2>
                <div className='flex flex-col md:flex-row justify-center items-center gap-20 my-7'>
                    <p className='inline-block align-middle text-justify   text-white'>Affogato thundercats quinoa, portland cold-pressed edison bulb artisan paleo banjo tousled try-hard food truck pop-up bushwick godard. Occupy 90's try-hard tote bag chicharrones stumptown polaroid hashtag cliche +1, tousled fanny pack. Tote bag iPhone crucifix hella helvetica food truck bicycle rights cloud bread. Yr iPhone asymmetrical, next level vexillologist godard blog green juice chia. Tacos jean shorts pickled PBR&B poutine.</p>
                    <p className='inline-block align-middle text-justify text-white '>Godard slow-carb chartreuse occupy, tumblr letterpress pok pok tattooed yr lyft yuccie kinfolk. IPhone kombucha shaman gastropub snackwave 90's lo-fi pug chillwave pok pok tofu. Swag deep v listicle roof party seitan man braid raclette church-key trust fund locavore vexillologist green juice raw denim tilde meh. Austin thundercats locavore taiyaki snackwave hoodie put a bird on it tattooed selvage kitsch ramps.</p>
                </div>
                <p className='text-white font-mono'>GODARD SLOW-CARB CHARTREUSE OCCUPY, TUMBLR LETTERPRESS</p>
            </div>

            {/*=====================  Recent work start =================*/}
            <div className=''>
                <h2 className='text-4xl text-center font-black text-white'>RECENT WORK</h2>
                <p className='text-white text-center font-mono'>WE OFFER DIGITAL SOLUTIONS</p>
                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-7'>
                    <div className='w-1/2'>
                        <p className='text-white text-left font-mono'>COMMERCIAL</p>
                        <h2 className='text-2xl text-left font-black text-white'>BUSHWICK SELFIESPORK BELLY LYFT BROOKLYN MESSENG</h2>
                        <p className='text-white text-left my-4 pr-10'>Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion axe sustainable retro ethical gentrify.</p>
                        <span className='flex justify-start items-center text-white font-black text-xl'>
                            <a href="">Read More </a><FaArrowRight className='mt-1 ml-2' />
                        </span>
                    </div>
                    <div className='w-1/2'>
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/HtTghY4/pexels-photo-1619654.jpg" alt="Your" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-13'>
                    <div className='w-1/2'>
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/cDTPCBy/audio-cassette-cassette-tape-1626481.jpg" alt="Your" />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-white text-left font-mono'>Graphsic Design</p>
                        <h2 className='text-2xl text-left font-black text-white'>TUMERIC TUMBLR GLUTEN-FREE MAN BUN SMALL</h2>
                        <p className='text-white text-left my-4 pr-10'>Slow-carb green juice subway tile bicycle rights, fanny pack raclette palo santo put a bird on it mustache actually fam mumblecore iPhone. Iceland post-ironic health goth snackwave, mixtape synth four dollar toast sartorial. Health goth la croix vexillologist, before they sold out shabby chic.</p>
                        <span className='flex justify-start items-center text-white font-black text-xl'>
                            <a href="">Read More </a><FaArrowRight className='mt-1 ml-2' />
                        </span>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-20 '>
                    <div className='w-1/2'>
                        <p className='text-white text-left font-mono'>BRANDING</p>
                        <h2 className='text-2xl text-left font-black text-white'> BRANDING BATCH KOMBUCHA SUBWAY TILE SALVIA BROOKLYN</h2>
                        <p className='text-white text-left my-4 pr-10'>Mlkshk YOLO wolf, leggings vinyl crucifix stumptown tousled. Pabst venmo gentrify deep v microdosing migas occupy master cleanse intelligentsia sartorial chia activated charcoal. Iceland small batch live-edge raclette roof party dreamcatcher austin pickled. Chillwave cronut messenger bag truffaut.</p>
                        <span className='flex justify-start items-center text-white font-black text-xl'>
                            <a href="">Read More </a><FaArrowRight className='mt-1 ml-2' />
                        </span>
                    </div>
                    <div className='w-1/2'>
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/QvHXBzs/blur-close-up-equipment-1034651.jpg" alt="Your" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-13'>
                    <div className='w-1/2'>
                        <img class="transform  hover:scale-110 transition duration-300" src="https://i.ibb.co/CKBXvhT/template.png" alt="Your" />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-white text-left font-mono'>WEB DESIGN</p>
                        <h2 className='text-2xl text-left font-black text-white'> ORGANIC ACTIVATED CHARCOAL VAPE VIRAL ENNUI</h2>
                        <p className='text-white text-left my-4 pr-10'>Tote bag cornhole pork belly swag, cronut hoodie snackwave 90's messenger bag pour-over disrupt chartreuse. Vape ugh cardigan hell of. Vaporware umami master cleanse neutra, chartreuse flexitarian lo-fi selvage hella hoodie freegan gentrify. 8-bit air plant umami asymmetrical franzen semiotics before.</p>
                        <span className='flex justify-start items-center text-white font-black text-xl'>
                            <a href="">Read More </a><FaArrowRight className='mt-1 ml-2' />
                        </span>
                    </div>
                </div>
            </div>

            {/*=====================  Fine Folks start =================*/}
            <div className='my-24'>
                <h2 className='text-4xl text-center font-black text-white mb-5'> FINE FOLKS WE'VE WORKED WITH</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center  divide-y divide-slate-700'>
                    <div><img className='w-36' src="https://i.ibb.co/h2T23jS/aed14647-8ecf-4fef-8274-737d79a7ede1.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/6v6q0bk/1c4bfb0e-0b9f-4c19-ba5c-113fb0714514.png" alt="" /> </div>
                    <div><img className='w-32' src="https://i.ibb.co/vLFhyMv/2ed0436b-e3ea-48aa-85ca-755de0719c9a.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/ft6nmp8/4b983c9a-759d-4921-ba60-dbbcaa702ee5.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/qxKGLN6/6e63c653-6997-42c6-b788-28e9fb6d15b7.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/VYYMqwF/7f7b6ede-3a3e-4e17-af25-f881c0121d63.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/MMpqjcr/9a6c570f-d03a-4806-9a30-dddc648707d9.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/Fz6drLb/9c30d6d6-6af9-4fb1-bed3-e5ea4df4c281.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/0MrTg00/69cb9e61-d0b8-4420-b8bd-454c9b9e1dc1.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/vcp3TFF/858e2e28-faae-441c-bd9c-5c490c72b562.png" alt="" /> </div>
                    <div><img className='w-36' src="https://i.ibb.co/YBkz8Vn/699301b6-83ff-47f8-ad46-a6b871e79293.png" alt="" /> </div>

                </div>
            </div>


            {/*=====================  Say Our Client =================*/}
            <div className=''>
                <Slider {...settings1}>
                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div>
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/ys1FrjC/pexels-photo-809433.jpg" alt="" />
                            </div>
                            <div className='w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Chambray enamel pin synth shabby chic palo santo. Franzen 90's man bun wayfarers, put a bird on it twee four loko roof party shabby chic kale chips photo booth salvia mixtape lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui celiac roof party. Ramps pitchfork direct trade, food truck tacos biodiesel craft beer. Af hammock listicle vape banjo echo park meditation organic cred subway tile. Echo park DIY.</p>
                            </div>
                            <span className='text-white text-center text-xl flex justify-center '> FRED KINNEY<p className='text-red-950 ml-3'>DESIGNER</p> </span>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div >
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/xjHD78g/pexels-photo-764529.jpg" alt="" />
                            </div>
                            <div className='w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, eligendi in! Fugiat quibusdam exercitationem, optio quos voluptas est dolores veniam maxime quidem modi itaque quaerat repellat laboriosam similique officia debitis! Affogato thundercats quinoa, portland cold-pressed edison bulb artisan paleo banjo tousled try-hard food truck pop-up bushwick godard. Occupy 90's try-hard tote bag chicharrones stumptown polaroid hashtag cliche +1, tousled fanny pack. Tote bag iPhone crucifix hella helvetica food truck bicycle rights cloud bread. Yr iPhone asymmetrical, next level vexillologist godard blog green juice chia. Tacos jean shorts pickled PBR&B poutine</p>
                            </div>
                            <span className='text-white text-center text-xl flex justify-center '> BALANCHAEV BALANCH,<p className='text-red-950 ml-3'>INVESTOR</p> </span>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div>
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/bXs2P7N/pexels-photo-894156.jpg" alt="" />
                            </div>
                            <div className='w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Pok pok authentic fashion axe, vegan venmo leggings raclette tousled twee tattooed. Banh mi humblebrag hammock tacos fashion axe aesthetic vegan sustainable taiyaki thundercats jean shorts tousled cloud bread waistcoat kogi. Cloud bread cardigan messenger bag raw denim swag drinking vinegar. Yuccie jianbing bespoke retro, photo booth salvia hella meh post-ironic cornhole tacos plaid.</p>
                            </div>
                            <span className='text-white text-center text-xl flex justify-center '> STEVE KONG,<p className='text-red-950 ml-3'>WEB DEVELOPER</p> </span>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div >
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/tDVbWDC/pexels-photo-428340.jpg" alt="" />
                            </div>
                            <div className='w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Bushwick tumeric slow-carb photo booth letterpress franzen kombucha tumblr listicle cronut waistcoat mustache. Jean shorts tilde swag cray. Microdosing heirloom wayfarers YOLO, church-key tattooed cred blue bottle viral lyft tacos retro. Bespoke drinking vinegar single-origin coffee pop-up, whatever air plant austin hexagon selfies tattooed. Fixie taxidermy forage hot chicken, locavore church-key authentic coloring book.</p>
                            </div>
                            <span className='text-white text-center text-xl flex justify-center '> BALANCHAEV BALANCH,<p className='text-red-950 ml-3'>INVESTOR</p> </span>
                        </div>
                    </div>
                </Slider>
            </div>

            {/*=====================  Video =================*/}
            <div className='my-24'>
                <div className="bg-[url('https://i.ibb.co/10qkN6M/business-calligraphy-chinese-lanterns-1455969.jpg')] backdrop-saturate-125 bg-white/30 h-screen w-full bg-cover bg-center">
                    <div className="flex flex-col justify-center items-center h-full">
                        <Fade bottom>
                            <a class="video-link absolute" target="_blank" href="" rel="nofollow"><img width="120" height="120" src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png" class="attachment-full size-full" alt="" srcset="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png 120w, https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon-100x100.png 100w" sizes="(max-width: 120px) 100vw, 120px" data-no-retina="" /></a>
                        </Fade>
                    </div>
                </div>
            </div>

            {/*=====================  Blogs =================*/}
               
            <div className=" blog ">
                {/* <h2 className="text-center text-white">Blog</h2> */}
                <h4 className='sm:text-center text-white text-2xl sm:text-4xl text-left' >FROM THE BLOG</h4>
                <p className="text-center p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s.</p>
                <div className='grid grid-cols-1 mt-16 sm:grid-cols-3 place-items-center gap-4'>
                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/3dtzRwC/SL-100321-45940-56.jpg" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/Fgn9XY0/20314239-SL-062121-43900-81.jpg" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/TtNThMm/20023212-SL-091320-34930-27.jpg" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='flex justify-end items-center mt-5 '>
                    <a className='text-white font-black text-xl' href="">View All </a>
                    <FaArrowRight className='text-white font-black text-xl ml-3'/>
                </span>
            </div>

        </div>
    );
};

export default ContentShotting;



