import React from 'react';

const EPServices = () => {
    return (
        <div className='container p-3'>
            <div className='w-full md:w-5/6 flex flex-col md:flex-row justify-between items-center gap-3 mx-auto py-10'>
                <div className="text-white text-start w-full md:w-3/6 mx-auto p-2">
                    <h3 className="text-3xl md:text-5xl pb-3">emotion-productions services</h3>
                    <div className="space-y-2 py-2 text-sm">
                        <p className="">Design is not about aesthetics, it is about emotions and concepts.</p>
                        <p className="">If you want to stand out from the competition, your brand needs to be
                            emotionally engaging. Deriving inspiration from the past and the
                            present to create something new and innovative.</p>
                        <p className="">Emotion-productions offers you the chance to create your next label
                            or design, based on market research, insights and trends that appeal
                            to today’s consumer. We want to create a high-quality product for your
                            needs. In other words, we follow your wishes.</p>
                        <p className="">The process of creating new products is as important to us as the
                            finished product. We take a holistic approach, working with you from
                            conception to launch. Our job is to ensure that your brand makes a
                            positive emotional connection with your target market.</p>
                        <p className="">We now offer a complete range of services so you can reach the end
                            result you want, each and every time. A range of services from a
                            known manufacturer, with a clear goal: to fully meet customer
                            expectations.</p>
                        <p className="">Our clients receive a professional service offering on time, as we
                            understand the importance of time as a factor in business.</p>
                    </div>
                    <button className='bg-[#5B5B5B] px-5 py-3 rounded text-white'>Make a Meeting</button>
                </div>
                <div className="w-full md:w-3/6 mx-auto p-2">
                    <img src="https://i.ibb.co/XYQSQF3/Group-763.png" alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default EPServices;