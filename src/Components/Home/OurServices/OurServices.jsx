import React from 'react';
import { ServicesData } from '../../../Data/ServicesData';

const OurServices = () => {
    return (
        <div className='container h-full pt-5 md:pt-10 py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">Our Services</h3>
            <p className="w-full md:w-2/3 text-white mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-10 w-full md:w-5/6 mx-auto">
                {
                    ServicesData?.map(data => (
                        <div key={data?.id} className="bg-[#1E1E1E] rounded flex justify-between items-center px-7 py-10">
                            <img src={data?.icon} alt="" className="object-cover w-10" />
                            <p className="text-white text-md">{data?.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurServices;