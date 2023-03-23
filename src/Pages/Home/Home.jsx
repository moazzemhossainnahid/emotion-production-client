import React from 'react';
import Banner from '../../Components/Home/Banner';
import BrandConcepts from '../../Components/Home/BrandConcepts/BrandConcepts';
import OurWorks from '../../Components/Home/OurWorks/OurWorks';
import TrustedBy from '../../Components/Home/TrustedBy/TrustedBy';
import WhyEmotion from '../../Components/Home/WhyEmotion/WhyEmotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyEmotion/>
            <TrustedBy/>
            <OurWorks/>
            <BrandConcepts/>
        </div>
    );
};

export default Home;
