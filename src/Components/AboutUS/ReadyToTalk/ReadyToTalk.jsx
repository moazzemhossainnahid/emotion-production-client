import React from 'react';

const ReadyToTalk = () => {
    return (
        <div className='container h-full pt-5 md:pt-10 py-10'>
            <h3 className="text-3xl md:text-4xl text-white font-bold pb-10">Ready To Talk?</h3>
            <p className="text-white pb-10">Letʼs Start the Convo <span class="text-white -pt-5">&rarr;</span> </p>
            <div className="bg-gradient-to-r from-[#3b00c4] to-[#c40083] p-10 py-16 md:w-2/3 mx-auto rounded">
                <h3 className="text-white text-3xl md:text-4xl font-semibold">Let's Keep In Touch</h3>
                <p className="text-white font-thin py-3">Join with Us for get instant update about offers and more</p>
                <div className="py-7">
                <input type="text" placeholder="Enter Your Mail" className="input rounded-none w-full max-w-xs" />
                <input className='bg-black text-white px-5 py-3 cursor-pointer' type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default ReadyToTalk;