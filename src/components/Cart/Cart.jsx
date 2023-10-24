import React, { useState } from "react";
// import {AiTwotoneDelete} from "react/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Cart = ({ cart }) => {
    const { _id, carImage, carName, price, details, rating } = cart;
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
  
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto my-5 rounded-l-lg lg:flex lg:justify-center lg:items-center lg:pr-5 pb-5">
            <img className="lg:w-1/4  lg:rounded-l-lg rounded-t" src={carImage} alt="Movie" />

            <div className="card-body">
                <h2 className="card-title  text-3xl font-bold">{carName}</h2>
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
                <p className="text-4xl font-bold text-[#EF1D26]">{price}</p>
            </div>
            <div className="card-actions">
                <button onClick={() => handleDelete(_id)} className="btn bg-[#EF1D26] text-white text-[20px]">
                    <i className="text-[20px]"><AiTwotoneDelete/></i>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Cart;
