import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Car from "../Car/Car";
// import AdvertisementSection from "../AdvertisementSection/AdvertisementSection";
import AdvertisementItems from "../AdvertisementItems/AdvertisementItems";
import { AiFillCar } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import Marquee from "react-fast-marquee";

const Cars = () => {
    const cars = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-20">
                    {cars.map((car) => (
                        <Car key={car._id} car={car}></Car>
                    ))}
                </div>
                <div className="text-center mb-4">
                    <button
                        onClick={handleGoBack}
                        className="btn bg-[#EF1D26] text-white text-[17px]"
                    >
                        <IoMdArrowRoundBack /> go back
                    </button>
                </div>
            </div>
            <div className="py-8">
                <div className="text-center my-1">
                    <div className="flex justify-center gap-2 text-[#EF1D26] items-center text-center ml-8 ">
                        <i className="text-2xl text-center">
                            <AiFillCar />
                        </i>
                        <p className="text-3xl font-bold tracking-widest text-center my-3">
                            40%OFF
                        </p>
                    </div>
                    <h3 className="text-4xl font-bold">
                        We are offering a 40% discount on these
                        <span className="text-[#EF1D26]"> Cars</span>
                    </h3>
                </div>
                <div className="md:flex my-10">
                    <Marquee>
                        {cars.map((car) => (
                            <AdvertisementItems
                                key={car._id}
                                car={car}
                            ></AdvertisementItems>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Cars;
