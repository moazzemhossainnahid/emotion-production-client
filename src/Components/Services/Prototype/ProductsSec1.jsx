import React from 'react';
import { ProductData } from '../../../Data/ProductData';

const ProductsSec1 = () => {
    return (
        <div className=''>
            {
                ProductData?.map(pd => (
                    <div className="">
                        {pd?.title}
                    </div>
                ))
            }
        </div>
    );
};

export default ProductsSec1;