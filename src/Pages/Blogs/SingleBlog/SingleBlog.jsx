import React from 'react';
import { useParams } from 'react-router';
import data from '../../../Data/BlogsData.json';


const SingleBlog = () => {
    const {id} = useParams();

    const blog = data?.find(b => b?.id === Number(id));
    // console.log(blog);

    return (
        <div>
            
        </div>
    );
};

export default SingleBlog;