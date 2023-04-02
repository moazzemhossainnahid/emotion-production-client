import React from 'react';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';

const EPServices = () => {
    return (
        <div className='container w-full mx-auto p-3'>
            <div className='w-full md:w-5/6 flex flex-col md:flex-row justify-between items-center gap-3 mx-auto py-10'>
                <div className="text-white text-start w-full md:w-3/6 mx-auto p-2">
                    <RubberBand>
                        <h3 className="text-3xl md:text-5xl pb-3">emotion-productions services</h3>
                    </RubberBand>
                    <div className="space-y-2 py-2 text-sm">
                        <Slide top>
                            <p className="">Design is not about aesthetics, it is about emotions and concepts.</p>
                        </Slide>
                        <Slide bottom>
                            <p className="">If you want to stand out from the competition, your brand needs to be
                                emotionally engaging. Deriving inspiration from the past and the
                                present to create something new and innovative.</p>
                        </Slide>
                        <Slide top>
                            <p className="">Emotion-productions offers you the chance to create your next label
                                or design, based on market research, insights and trends that appeal
                                to today’s consumer. We want to create a high-quality product for your
                                needs. In other words, we follow your wishes.</p>
                        </Slide>
                        <Slide bottom>
                            <p className="">The process of creating new products is as important to us as the
                                finished product. We take a holistic approach, working with you from
                                conception to launch. Our job is to ensure that your brand makes a
                                positive emotional connection with your target market.</p>
                        </Slide>
                        <Slide top>
                            <p className="">We now offer a complete range of services so you can reach the end
                                result you want, each and every time. A range of services from a
                                known manufacturer, with a clear goal: to fully meet customer
                                expectations.</p>
                        </Slide>
                        <Slide bottom>
                            <p className="">Our clients receive a professional service offering on time, as we
                                understand the importance of time as a factor in business.</p>
                        </Slide>
                    </div>
                    <RubberBand>
                        <button className='bg-[#5B5B5B] px-5 py-3 rounded text-white'>Make a Meeting</button>
                    </RubberBand>
                </div>
                <div className="w-full md:w-3/6 mx-auto p-2">
                    <Flash>
                        <img src="https://i.ibb.co/XYQSQF3/Group-763.png" alt="" className="" />
                    </Flash>
                </div>
            </div>
        </div>
    );
};

export default EPServices;