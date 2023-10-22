import React from "react";
import { useLoaderData } from "react-router-dom";
import Car from "../Car/Car";

const Cars = () => {
    const cars = useLoaderData();
    return (
        <div className="w-4/5 mx-auto" >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-20">
                {cars.map((car) => (
                    <Car key={car._id} car={car}></Car>
                ))}
            </div>
        </div>
    );
};

export default Cars;
