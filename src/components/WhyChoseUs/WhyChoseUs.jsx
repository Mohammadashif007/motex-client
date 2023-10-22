import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import img from "../../assets/02.png";

const WhyChoseUs = () => {
    return (
        <div className="flex items-center gap-20 w-4/5 mx-auto my-28">
            <div className="flex-1">
                <div className="flex gap-2 text-[#EF1D26] items-center">
                    <i className="text-2xl">
                        <AiFillCar />
                    </i>
                    <p className="text-[20px] font-bold tracking-widest">
                        WHY CHOOSE US
                    </p>
                </div>
                <h3 className="text-5xl font-bold  my-5">
                    We Are Dedicated{" "}
                    <span className="text-[#EF1D26]">
                        To <br /> Provide
                    </span>{" "}
                    Quality Service
                </h3>
                <p className="my-5 text-[#757F95] text-[17px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                </p>
                <div className="flex items-center gap-2 mb-3 text-[17px] text-[#757F95]">
                    <i className="text-[#EF1D26]">
                        <BsCheckCircle />
                    </i>
                    <p>At vero eos et accusamus et iusto odio.</p>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[17px] text-[#757F95]">
                    <i className="text-[#EF1D26]">
                        <BsCheckCircle />
                    </i>
                    <p>Established fact that a reader will be distracted.</p>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[17px] text-[#757F95]">
                    <i className="text-[#EF1D26]">
                        <BsCheckCircle />
                    </i>
                    <p>Sed ut perspiciatis unde omnis iste natus sit.</p>
                </div>
            </div>
            <div className="flex-1">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default WhyChoseUs;
