import React from 'react';
import PopularBlog from './PopularBlog';
import TopBlog from './TopBlog';

const Blogs = () => {
    return (
        <div className='container py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">Blogs</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.consetetur sadipscing elitr</p>
            <div className="">
                <PopularBlog />
                <TopBlog />
            </div>
        </div>
    );
};

export default Blogs;