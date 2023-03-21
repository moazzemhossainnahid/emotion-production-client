import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/prFm8Dh/home-banner.png')] backdrop-saturate-125 bg-white/30 h-screen w-full bg-cover bg-center">

            <div className="flex flex-col justify-center items-center h-full">
                <a class="video-link absolute" target="_blank" href="" rel="nofollow"><img width="120" height="120" src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png" class="attachment-full size-full" alt="" srcset="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png 120w, https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon-100x100.png 100w" sizes="(max-width: 120px) 100vw, 120px" data-no-retina="" /></a>
            </div>

        </div>
    );
};

export default Banner;