import React from "react";
import AdvertisementItems from "../AdvertisementItems/AdvertisementItems";
import { AiFillCar } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const AdvertisementSection = ({car}) => {
    return (
        <div>
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
            <div className="flex py-1">
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
    );
};

export default AdvertisementSection;
