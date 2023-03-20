import React from 'react';
import Banner from './Banner';
import Emotion from './Emotion';

const Home = () => {
    return (
        <div>
            {/* <h3 className="text-rose-600 text-3xl">Welcome to Emotion Production</h3> */}
            <Banner/>
            <Emotion/>
        </div>
    );
};

export default Home;