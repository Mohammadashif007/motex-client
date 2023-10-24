import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2'

const CarDetails = () => {
    const car = useLoaderData();
    const navigate = useNavigate();
    const {
        _id,
        carName,
        carImage,
        color,
        bodyTypes,
        details,
        price,
        brandName,
    } = car;
    const handleGoBack = () => {
        navigate(-1)
    };
    const handleAddCart = id => {
        console.log(id);
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify(car)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Item added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="card w-2/3 bg-base-100 shadow-xl mx-auto my-20">
            <figure>
                <img src={carImage} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl text-[#EF1D26] font-bold">{carName}</h2>
                <h2 className="text-2xl font-bold">{brandName}</h2>
                <p className="text-3xl text-[#EF1D26] font-bold">{price}</p>
                <p>{details}</p>

                <div className="flex justify-between items-center my-5">
                    <div>
                        <button onClick={()=>handleAddCart(_id)} className="btn bg-[#EF1D26] text-white text-[17px]">
                            <i className="text-2xl">
                                <FaShoppingCart></FaShoppingCart>
                            </i>
                            Add Cart
                        </button>
                    </div>
                    <div className="card-actions text-[#EF1D26]">
                        <div className="badge badge-outline">{bodyTypes}</div>
                        <div className="badge badge-outline">{color}</div>
                    </div>
                </div>
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
    );
};

export default CarDetails;
