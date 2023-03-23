import React from 'react';

const OurWorks = () => {
    return (
        <div className='container p-3 md:p-1 w-full md:w-5/6 mx-auto py-10'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-7">
                <div className="text-white md:text-start order-2 md:order-1">
                    <h3 className="text-3xl md:text-4xl">Lorem Ipsum is simply</h3>
                    <div className="pt-3">
                        <p className="tracking-widest text-justify"></p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br />
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br />
                        galley of type and scrambled it to make a type specimen book. <br />
                    </div>
                </div>
                <div className="text-xl order-1 md:order-2">
                    <div className="">
                        <p className="text-white">Services</p>
                        <p className="text-[#959595]">Packaging</p>
                        <p className="text-[#959595]">Design</p>
                        <p className="text-[#959595]">Production</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;