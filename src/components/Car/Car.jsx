import React from "react";
import { AiFillEye } from "react-icons/ai";
import { GiFireworkRocket } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Car = ({ car }) => {
    const navigate = useNavigate();
    const handleDetailsPage = id => {
        navigate(`/car/${id}`);
    }
    const {
        _id,
        carName,
        brandName,
        carImage,
        price,
        rating,
        details,
        bodyTypes,
        color,
    } = car;
    return (
        <div className="card full bg-base-100 shadow-xl">
            <figure>
                <img src={carImage} alt="car" />
            </figure>
            <div className="card-body px-4">
                <h2 className="card-title text-3xl font-bold text-[#EF1D26]">
                    {carName}
                </h2>
                <h2 className="text-[18px] font-bold">{brandName}</h2>
                <div className="flex items-center gap-3">
                    <div className="rating ">
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <p className="text-2xl">({rating})</p>
                </div>
                <p>{details}</p>
                <div className="text-[#EF1D26]">
                    <div className="badge badge-outline">{bodyTypes}</div>
                    {
                        color ? <div className="badge badge-outline">{color}</div>:""
                    }
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-3xl font-bold text-[#EF1D26]">
                            {price}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <button onClick={()=>handleDetailsPage(_id)} className="btn bg-[#EF1D26] text-white text-[17px]">
                            {" "}
                            <i className="text-2xl">
                                <AiFillEye></AiFillEye>
                            </i>
                            Details
                        </button>
                        <button className="btn bg-[#EF1D26] text-white text-[17px]">
                            <i className="text-2xl">
                                <GiFireworkRocket></GiFireworkRocket>
                            </i>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;
