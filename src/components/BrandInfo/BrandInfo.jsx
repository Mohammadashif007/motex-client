import React from "react";
import { useNavigate } from "react-router-dom";

const BrandInfo = ({ brand }) => {
    const { _id, brand_logo, brand_name } = brand;
    const navigate = useNavigate();
    const handleCarsNavigate = (brandName) => {
        navigate(`/cars/${brandName}`);
        
    };

     return (
        <div
            
            onClick={() => handleCarsNavigate(brand_name)}
            className="text-center border p-3 rounded cursor-pointer"
        >
            <img src={brand_logo} alt="" />
            <h1 className="text-2xl font-bold">{brand_name}</h1>
        </div>
    );
};

export default BrandInfo;
