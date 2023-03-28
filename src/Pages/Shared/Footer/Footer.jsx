import React from 'react';

const Footer = () => {
    return (
        <div className='container pt-10 pb-7'>
            <div className=" flex flex-col md:flex-row gap-5 w-full md:w-5/6 mx-auto">
                <div className='space-y-3 w-full md:w-1/4 mx-auto'>
                    <img className='px-5 md:px-0' src="https://i.ibb.co/tstmn7Z/Logo-PNG.png" alt="" />
                    <p className="text-white ml-4 md:text-left">Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry.</p>
                </div>
                <div className='flex items-center text-white text-left justify-around w-full md:w-2/4 mx-auto'>
                    <div>
                        <ul>
                            <li className='text-xl font-bold pb-5'><a href="">Company</a></li>
                        </ul>
                        <ul>
                            <li><a href="">About Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Contract Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Project</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='text-xl font-bold pb-5'><a href="">Quick Link</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Contract Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' w-full md:w-1/4 mx-auto space-y-3'>
                    <h1 className="text-white text-center sm:text-left">Follow Hypnobond</h1>
                    <div className='flex items-center justify-center md:justify-left'>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <img src="https://i.ibb.co/nPkKWVw/f-1.png" alt="" />
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <img src="https://i.ibb.co/yFyjvfr/instagram.png" alt="" />
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <img src="https://i.ibb.co/bBYDSBK/linkedin.png" alt="" />
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <img src="https://i.ibb.co/J72ZqSm/Icon-awesome-youtube.png" alt="" />
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <img src="https://i.ibb.co/fDqBgNZ/tik-tok.png" alt="" />
                        </span>
                    </div>
                    <h1 className="text-white text-center md:text-left">Showroom</h1>
                    <h1 className="text-white text-center md:text-left">  Richterlaan 10, 9207JT, DrachtenThe Netherlands</h1>
                    <h1 className="text-white text-center md:text-left">Bezoek op Afspraak</h1>
                </div>
            </div>
            <div className="w-full mx-auto pt-5">
                <img className='w-4/5 mx-auto py-3' src="https://i.ibb.co/L8m7FdK/Rectangle-1515.png" alt="" />
                <p className="text-white">©Emotion Productions. All rights reserved</p>
            </div>

        </div >
    );
};

export default Footer;