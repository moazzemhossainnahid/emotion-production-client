import React from 'react';

const Owner = () => {
    const bg = "https://i.ibb.co/N9cR31F/Picture-prive-foto.png";
    return (
        <div className='w-full p-2 md:w-3/5 mx-auto'>
            <div className='sm:flex mt-24 justify-center items-center inline-block'>
                <div className='sm:w-6/12 w-full sm:p-0 p-2 m-auto'>
                    <h2 className='sm:text-left text-center'>Timon Eijsink</h2>
                    <p className='mt-2 sm:text-left text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid est unde voluptatem laudantium
                    </p>
                    <p className='sm:text-left text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aperiam nostrum tempore quae nam repellat nisi</p>

                    <p className='mt-1 sm:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid est unde voluptatem laudantium quod rem ducimus provident inventore molestias incidunt ratione quae ea explicabo, sequi suscipit, obcaecati deleniti iure!</p>
                    <p className='mt-1 sm:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid est unde voluptatem laudantium quod rem ducimus provident inventore molestias incidunt ratione quae ea explicabo, sequi suscipit, obcaecati deleniti iure! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste quae sunt. Ipsum, quia. Natus nobis maxime, ipsam quos expedita laborum hic omnis eius cumque velit! Similique nemo dolore nesciunt?</p>
                </div>
                <div className='max-w-lg max-h-96 bg-downlist  rounded-lg m-auto '>
                    <img className='w-' src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Owner;