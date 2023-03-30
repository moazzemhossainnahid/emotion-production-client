import React from 'react';
import Flash from 'react-reveal/Flash';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';

const ReadyToTalk = () => {
    return (
        <div className='container overflow-hidden h-full pt-5 md:pt-10 py-10'>
            <Jump>
                <h3 className="text-3xl md:text-4xl text-white font-bold pb-10">Ready To Talk?</h3>
            </Jump>
            <LightSpeed>
                <p className="text-white pb-10">Letʼs Start the Convo <span class="text-white -pt-5">&rarr;</span> </p>
            </LightSpeed>
            <Flash>
                <div className="bg-gradient-to-r from-[#3b00c4] to-[#c40083] p-10 py-16 md:w-2/3 mx-auto rounded">
                    <Bounce left>
                        <h3 className="text-white text-3xl md:text-4xl font-semibold">Let's Keep In Touch</h3>
                    </Bounce>
                    <Bounce right>
                        <p className="text-white font-thin py-3">Join with Us for get instant update about offers and more</p>
                    </Bounce>
                    <Bounce left>
                        <div className="py-7">
                            <input type="text" placeholder="Enter Your Mail" className="input rounded-none w-full max-w-xs" />
                            <input className='bg-black hover:bg-[#212121] text-white px-5 py-3 cursor-pointer' type="submit" value="Subscribe" />
                        </div>
                    </Bounce>
                </div>
            </Flash>
        </div>
    );
};

export default ReadyToTalk;