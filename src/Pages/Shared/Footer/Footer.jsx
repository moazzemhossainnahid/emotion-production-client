import React from 'react';

const Footer = () => {
    return (
        <div className='container grid-cols-1 sm:grid-cols-3 grid gap-3 '>
            <div>
                <img src="https://i.ibb.co/tstmn7Z/Logo-PNG.png" alt="" />
                <p className="text-white ml-4 text-left">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry.</p>
            </div>
            <div className='flex items-center text-white text-left justify-around'>
                <div>
                    <ul>
                        <liu><a href="">Company</a></liu>
                    </ul>
                    <ul>
                        <liu><a href="">About Us</a></liu>
                    </ul>
                    <ul>
                        <liu><a href="">Contract Us</a></liu>
                    </ul>
                    <ul>
                        <liu><a href="">Project</a></liu>
                    </ul>
                </div>
                <div>
                    <ul>
                        <liu><a href="">Quick Link</a></liu>
                    </ul>
                    <ul>
                        <liu><a href="">Contract Us</a></liu>
                    </ul>
                    <ul>
                        <liu><a href="">Terms of Service</a></liu>
                    </ul>
                    <ul>
                        <liu><a href="">Privacy Policy</a></liu>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="text-white text-center sm:text-left">Follow Hypnobond</h1>
                <div className='flex items-center justify-left'>
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
                <h1 className="text-white text-left">Showroom</h1>
                <h1 className="text-white text-left">  Richterlaan 10, 9207JT, DrachtenThe Netherlands</h1>
                <h1 className="text-white text-left">Bezoek op Afspraak</h1>
            </div>
            <br />
          
        </div >
    );
};

export default Footer;