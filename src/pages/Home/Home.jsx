import React from "react";
import Banner from "../../components/Banner/Banner";
import AboutSection from "../../components/AboutSection/AboutSection";
import WhyChoseUs from "../../components/WhyChoseUs/WhyChoseUs";
import { useLoaderData } from "react-router-dom";
import BrandInfo from "../../components/BrandInfo/BrandInfo";

const Home = () => {
    const brandInfo = useLoaderData();
    // console.log(brandInfo);
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <div className="flex justify-center w-4/5 mx-auto items-center gap-3">
                {brandInfo.map((brand) => (
                    <BrandInfo key={brand._id} brand={brand}></BrandInfo>
                ))}
            </div>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;
