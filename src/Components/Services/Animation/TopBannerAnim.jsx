import React from 'react';
import Fade from 'react-reveal/Fade';

const TopBannerAnim = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-14 overflow-hidden'>
            <div className='w-full md:w-3/6 p-0 '>
            <img draggable="false" style={{ animation: `bounce-in 20s infinite`}} className='w-16 mx-auto flex items-start ' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/vector-img-2-1.png" alt="" />
            <div className="">
                <div className="">
                    <h3 className="text-[150px] uppercase font-bold text-[#1E1E1E]">Digital</h3>
                    <Fade bottom>
                    <h4 className="text-3xl md:text-5xl font-bold text-white uppercase text-start -mt-24 tracking-[7px] leading-10">Measurable & Effective Results for Customers</h4>
                    <p className="text-gray-200 text-xl font-thin pt-5 text-start">Your Business is Creative Idea to Launching.</p>
                    </Fade>
                </div>
            </div>
            </div>
            <div className='w-full relative md:w-3/6 mx-auto p-4'>
            <div draggable="false" style={{animation: `bounce-in 5s linear`}} className="md:bg-[url('https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/3d-handhold-phone-mobile.png')] relative rounded-3xl flex flex-col justify-center items-center w-full mx-auto h-[80vh] md:h-[90vh] bg-cover p-7">
                <img draggable="false" style={{ animation: `bounce2 15s infinite`}} className='w-2/6 absolute bottom-20 -left-3' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/coub-img-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBannerAnim;