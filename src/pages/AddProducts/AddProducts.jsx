import React from "react";

const AddProducts = () => {
    return (
        <div className="w-4/5 mx-auto py-15">
            <h2 className="text-4xl font-bold mb-8 text-center">
                MOT<span className="text-[#EF1D26]">E</span>X
            </h2>
            <div>
                <form>
                    <div className="">
                        <div className="flex justify-center gap-8">
                            <div className="">
                                <label>Brand Name</label>
                                <br />
                                <input
                                    type="text"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Brand Name"
                                />
                            </div>
                            <div className="">
                                <label>Car Name</label>
                                <br />
                                <input
                                    type="text"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Car Name"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center gap-8 my-5">
                            <div className="">
                                <label>Car Type</label>
                                <br />
                                <input
                                    type="text"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Car Type"
                                />
                            </div>
                            <div className="">
                                <label>Price</label>
                                <br />
                                <input
                                    type="text"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Price"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center gap-8 my-5">
                            <div className="">
                                <label>Rating</label>
                                <br />
                                <input
                                    type="text"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Rating"
                                />
                            </div>
                            <div className="">
                                <label>Car Image</label>
                                <br />
                                <input
                                    type="text"
                                    className="border py-2 px-3 rounded mt-1"
                                    placeholder="Photo URL"
                                />
                            </div>
                        </div>
                        <div className="mx-auto flex justify-center">
                            <div>
                            <label>Short description</label>
                            <br />
                            {/* <input
                                type="text"
                                className="border  px-3 rounded mt-1 w-[450px] h-[100px]"
                                placeholder="Short description"
                                name=""
                                id=""
                            /> */}
                            <textarea name="" id="" cols="58" rows="5" className="mt-3 border p-2" placeholder="Short description">

                            </textarea>
                            </div>
                        </div>
                        <div className="flex justify-center mb-8">
                            <input type="submit" value="Submit" className="border py-3 px-10 bg-[#EF1D26] text-white rounded font-bold text-[18px]" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;


