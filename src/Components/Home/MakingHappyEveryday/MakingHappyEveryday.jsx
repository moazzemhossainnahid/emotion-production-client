import React from 'react';
import Slider from './Slider';
import data from "../../../Data/SliderData.json";

const MakingHappyEveryday = () => {

    return (
        <div className='bg-[#1E1E1E] my-10 w-full'>
            {/* <div className="bg-[url('https://svgshare.com/i/rUV.svg')] relative rounded-3xl flex justify-center items-center w-full mx-auto h-[80vh] md:h-[90vh] bg-cover p-7">
                <div className="text-center relative w-full md:w-2/3 mx-auto">
                    <h3 className="text-center text-white text-3xl font-semibold pb-7">Making Many Happy Everyday </h3>
                    <div className="pt-10 w-full md:w-3/5 mx-auto">
                        <img src="https://i.ibb.co/tJCcBwC/Icon-metro-quote.png" alt="" className="absolute left-0 top-0 p-5" />
                        <Slider Data={data} />
                        <img src="https://i.ibb.co/m8YpJfJ/Icon-metro-quote-1.png" alt="" className="absolute right-0 bottom-0 p-5" />
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default MakingHappyEveryday;