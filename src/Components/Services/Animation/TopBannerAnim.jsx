import React from 'react';

const TopBannerAnim = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center mt-14 overflow-hidden'>
            <div className='w-full md:w-3/6 p-0 sm:p-5'>
                <h2 className='text-center text-2xl sm:text-5xl sm:text-left'>leading provider of
                    UI/UX design development
                    services</h2>
                <p className='text-center sm:text-left pt-3'>Emotion continues to place a lot of emphasis on UI/UX Design development. For platforms
                    such as Android, iOS, desktops, and others, we create UI/UX. We rely on our technically
                    proficient skilled developers to be able to comprehend your ideas and give them life. To meet
                    the demands of each project, we provide cutting-edge research, HCD UI & UX design, and
                    application development. For examples of dozens of unique and effective UI/UX for Android,
                    iOS, desktop, and other platforms, visit our portfolio.</p>
            </div>
            <div className='w-full relative md:w-3/6 mx-auto p-4'>
            <div draggable="false" style={{animation: `bounce-in 5s linear`,transform: `rotate(${Math.floor(Math.random() * (361))}deg)`}} className="md:bg-[url('https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/3d-handhold-phone-mobile.png')] relative rounded-3xl flex flex-col justify-center items-center w-full mx-auto h-[80vh] md:h-[90vh] bg-cover p-7">
                <img draggable="false" style={{ animation: `bounce2 15s infinite`}} className='w-2/6 absolute bottom-20 -left-3' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/coub-img-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBannerAnim;