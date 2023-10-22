import React from "react";

const AdvertisementItems = ({car}) => {
    const { carName, carImage, enginType, bodyTypes} = car;
    return (
        <div className="card w-4/5 bg-base-100 shadow-xl">
            <figure>
                <img className="h-[180px]" src={carImage} alt="car" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {carName}
                    <div className="badge text-[#EF1D26] border-[#EF1D26]">
                        40%OFF
                    </div>
                </h2>
                <p>Don't buy this car</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{enginType}</div>
                    <div className="badge badge-outline">{bodyTypes}</div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementItems;
