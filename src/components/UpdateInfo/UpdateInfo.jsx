import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateInfo = () => {
    const updateInfo = useLoaderData();
    const {
        _id,
        carName,
        brandName,
        carImage,
        price,
        rating,
        details,
        bodyTypes,
    } = updateInfo;

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        const brandName = form.brand.value;
        const carName = form.car.value;
        const bodyTypes = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const carImage = form.image.value;
        const details = form.description.value;
        const carInfo = {
            brandName,
            carName,
            bodyTypes,
            price,
            rating,
            carImage,
            details,
        };

        // send to server
        fetch(`http://localhost:5000/updateCar/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(carInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Information update successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="w-4/5 mx-auto py-15">
            <h2 className="text-4xl font-bold mb-8 text-center">
                Update <span className="text-[#EF1D26]">Car</span> Information
            </h2>
            <div>
                <form onSubmit={handleUpdateInfo}>
                    <div className="">
                        <div className="flex justify-center gap-8">
                            <div className="">
                                <label>Brand Name</label>
                                <br />
                                <input
                                    type="text"
                                    name="brand"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Brand Name"
                                    defaultValue={brandName}
                                />
                            </div>
                            <div className="">
                                <label>Car Name</label>
                                <br />
                                <input
                                    type="text"
                                    name="car"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Car Name"
                                    defaultValue={carName}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center gap-8 my-5">
                            <div className="">
                                <label>Car Type</label>
                                <br />
                                <input
                                    type="text"
                                    name="type"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Car Type"
                                    defaultValue={bodyTypes}
                                />
                            </div>
                            <div className="">
                                <label>Price</label>
                                <br />
                                <input
                                    type="text"
                                    name="price"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Price"
                                    defaultValue={price}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center gap-8 my-5">
                            <div className="">
                                <label>Rating</label>
                                <br />
                                <input
                                    type="text"
                                    name="rating"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Rating"
                                    defaultValue={rating}
                                />
                            </div>
                            <div className="">
                                <label>Car Image</label>
                                <br />
                                <input
                                    type="text"
                                    name="image"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Photo URL"
                                    defaultValue={carImage}
                                />
                            </div>
                        </div>
                        <div className="mx-auto flex justify-center">
                            <div>
                                <label>Short description</label>
                                <br />
                                <textarea
                                    name="description"
                                    id=""
                                    cols="58"
                                    rows="5"
                                    className="mt-3 border p-2"
                                    placeholder="Short description"
                                    defaultValue={details}
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center mb-8">
                            <input
                                type="submit"
                                value="Update"
                                className="btn cursor-pointer border py-3 px-10 bg-[#EF1D26] text-white rounded font-bold text-[18px]"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateInfo;
