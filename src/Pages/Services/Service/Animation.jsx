import React from 'react';
import TopBannerAnim from '../../../Components/Services/Animation/TopBannerAnim';
import CardAnim from '../../../Components/Services/Animation/CardAnim';

const Animation = () => {
    return (
        <div className="container px-7 mx-auto w-full text-white">
            <TopBannerAnim />
            <CardAnim />
        </div>
    );
};

export default Animation;