import React from 'react';
import TopBannerAnim from '../../../Components/Services/Animation/TopBannerAnim';
import CardAnim from '../../../Components/Services/Animation/CardAnim';
import BusinessGrowingUp from '../../../Components/Services/Animation/BusinessGrowingUp';

const Animation = () => {
    return (
        <div className="container px-7 mx-auto w-full text-white">
            <TopBannerAnim />
            <CardAnim />
            <BusinessGrowingUp />
        </div>
    );
};

export default Animation;