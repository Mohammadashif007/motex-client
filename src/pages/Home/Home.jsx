import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/AboutSection/AboutSection';
import WhyChoseUs from '../../components/WhyChoseUs/WhyChoseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;