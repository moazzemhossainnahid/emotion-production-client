import React from 'react';

const Owner = () => {
    const bg = "https://i.ibb.co/N9cR31F/Picture-prive-foto.png";
    return (
        <div className='w-full p-2 md:w-4/5 flex flex-col md:flex-row mx-auto'>

            <div className='w-full md:w-2/5 mx-auto text-left'>
                <h2 className='text-white text-2xl pb-2'>Timon Eijsink</h2>
                <div className="text-[#C9C9C9] space-y-2 text-start">
                    <p className='mt-2 text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid est unde voluptatem laudantium
                    </p>
                    <p className='sm:text-left text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aperiam nostrum tempore quae nam repellat nisi</p>

                    <p className='mt-1 sm:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid est unde voluptatem laudantium quod rem ducimus provident inventore molestias </p>
                    <p className='mt-1 sm:text-left text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid est unde voluptatem laudantium quod rem ducimus provident inventore molesti</p>

                </div>
            </div>
            <div className='w-full md:w-2/5 h-80 overflow-hidden mx-auto bg-[#272727] rounded'>
                <img className='object-cover pt-2' src={bg} alt="" />
            </div>
        </div>
    );
};

export default Owner;