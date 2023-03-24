import React from 'react';

const BrandPortfolios = () => {
    return (
        <div className='container h-full pt-5 md:pt-10 py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">Brand Portfolios</h3>
            <div className="bg-[url('https://i.ibb.co/myqPCyR/Path-14173.jpg')] relative flex items-center w-full h-[80vh] bg-cover p-7">
                    <div className="bg-transparent text-white flex gap-3 rounded-2xl p-5 m-5 text-start absolute -left-0">
                        <div className="w-full md:w-3/6 mx-auto flex flex-col md:flex-row gap-3 overflow-hidden">
                            <div className="h-[70vh] w-2/5">
                               <img src="https://i.ibb.co/Vjyv7n6/Full-Outfit-Zhadl.png" alt="" className="rounded-3xl h-[70vh] object-cover" /> 
                            </div>
                            <div className="flex flex-col gap-2 h-[70vh] w-3/5">
                            <img src="https://i.ibb.co/X2MvL3T/JOR08613.jpg" alt="" className="rounded-3xl h-[35vh] object-cover" /> 
                            <img src="https://i.ibb.co/z46HMXZ/1.png" alt="" className="rounded-3xl h-[35vh] object-cover" /> 
                            </div>
                        </div>
                        <div className="w-full md:w-3/6 mx-auto flex flex-col md:flex-row gap-3 overflow-hidden">
                            <div className="h-[70vh] w-2/5">
                               <img src="https://i.ibb.co/6ZFtm40/JOR08694.jpg" alt="" className="rounded-3xl h-[70vh] object-cover" /> 
                            </div>
                            <div className="flex flex-col gap-2 h-[70vh] w-3/5">
                            <img src="https://i.ibb.co/Wf07PDx/JOR08802.jpg" alt="" className="rounded-3xl h-[35vh] object-cover" /> 
                            <img src="https://i.ibb.co/SwM84bd/JOR08670.jpg" alt="" className="rounded-3xl h-[35vh] object-cover" /> 
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BrandPortfolios;