import React from 'react';
import Company from './Company';
import Owner from './Owner';

const WhyEmotion = () => {
    return (
        <div className='py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold">Why Emotion</h3>
            <section className='flex items-center justify-center w-full mx-auto my-20'>
                <div className='w-full mx-auto'>
                    <ul class="nav nav-tabs grid grid-cols-2 md:flex-row flex-wrap list-none border-b-0 mb-4 bg-white rounded-full justify-center w-1/3 mx-auto gap-4" id="tabs-tab" role="tablist">


                        <li class="nav-item" role="presentation">
                            <a href="#tabs-company" class="" id="tabs-company-tab" data-bs-toggle="pill" data-bs-target="#tabs-company" role="tab" aria-controls="tabs-company"
                                aria-selected="true">
                                <div class="card hover:bg-neutral focus:bg-neutral rounded-full m-2">
                                    <div class="card-body">
                                        <p className='text-white'>Company</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-owner" class="" id="tabs-owner-tab" data-bs-toggle="pill" data-bs-target="#tabs-owner" role="tab"
                                aria-controls="tabs-owner" aria-selected="false">
                                <div class="card hover:bg-neutral focus:bg-neutral rounded-full m-2">
                                    <div class="card-body">
                                        <p className='text-white'>Owner</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                    <div class="tab-content" id="tabs-tabContent">
                        <div class="tab-pane fade show active" id="tabs-company" role="tabpanel" aria-labelledby="tabs-company-tab">
                            <Company/>
                        </div>
                        <div class="tab-pane fade" id="tabs-owner" role="tabpanel" aria-labelledby="tabs-owner-tab">
                            <Owner/> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyEmotion;