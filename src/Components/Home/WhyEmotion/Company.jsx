import React from 'react';
import { Bounce } from 'react-reveal';

const Company = () => {
    return (
        <div className='w-full p-2 md:w-3/5 mx-auto text-white'>
            <Bounce left>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,.</p>
            </Bounce>
            <div className="p-3 w-full md:w-3/5 pt-10 mx-auto gap-10">
                <Bounce right>
                    <img src="https://svgshare.com/i/rLg.svg" alt="made-in-italy" className="object-cover" />
                </Bounce>
            </div>
        </div>
    );
};

export default Company;