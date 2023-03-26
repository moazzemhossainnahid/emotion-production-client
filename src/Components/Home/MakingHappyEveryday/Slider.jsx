import React from "react";
import Carousel from "react-elastic-carousel";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Slider = ({ Data }) => {
  return (
    <Carousel
      showArrows={false}
      enableAutoPlay
      autoPlaySpeed={2500}
      loop={Infinity}
    >
      {Data.length &&
        Data.map((data, index) => (
          <div
            key={index}
            className="flex h-full lg:h-60 bg-white rounded-lg border shadow-md  dark:border-gray-700
             dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="columns-1 lg:m-5">
              <div className="w-20 h-20 lg:w-28 mt-3 ml-1 lg:h-28">
                <img
                  className="rounded-full border-4 border-[#33D687]"
                  src={data.img}
                  alt=""
                />
              </div>
              <div className="flex justify-end  lg:ml-4 -mt-7">
                <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
                  <FaQuoteLeft className="text-xl text-white lg:text-2xl" />
                </p>
              </div>
              <div className="flex justify-end  lg:ml-4 -mt-7">
                <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
                  <FaQuoteRight className="text-xl text-white lg:text-2xl" />
                </p>
              </div>
            </div>
            <div className="columns-6 p-2 flex flex-col lg:justify-around leading-normal">
              <div>
                <p className="mb-3 lg:text-xl text-gray-400 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">{data.name}</h2>
                <p className="text-gray-400">Guest from {data.title}</p>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default Slider;