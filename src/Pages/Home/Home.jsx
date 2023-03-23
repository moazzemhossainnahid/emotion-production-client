import React from 'react';
import Banner from '../../Components/Home/Banner';
import TrustedBy from '../../Components/Home/TrustedBy/TrustedBy';
import WhyEmotion from '../../Components/Home/WhyEmotion/WhyEmotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyEmotion/>
            <TrustedBy/>
        </div>
    );
};

export default Home;
