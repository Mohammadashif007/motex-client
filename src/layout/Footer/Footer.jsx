import React from "react";
import { BiSolidPhoneCall, BiSolidLocationPlus, BiLogoTelegram } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div className=" bg-[#111111] text-[#F9F9F9]">
            <div className="lg:flex gap-4 w-10/12 mx-auto py-10 text-[18px]">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-8">MOT<span className="text-[#EF1D26]">E</span>X</h2>
                    <p className="text-[18px] mb-8">
                        We are many variations of passages available but the
                        majority have suffered alteration in some form by
                        injected humour words believable.
                    </p>
                    <p className="mb-5 flex gap-3 items-center">
                        <i className="inline-block text-2xl p-2 bg-[#EF1D26] rounded-2xl">
                            <BiSolidPhoneCall></BiSolidPhoneCall>
                        </i>
                        <span className="">+2 123 654 7898</span>
                    </p>
                    <p className="mb-5 flex gap-3 items-center">
                        <i className="inline-block text-2xl p-2 bg-[#EF1D26] rounded-2xl">
                            <BiSolidLocationPlus></BiSolidLocationPlus>
                        </i>
                        <span className="">25/B Milford Road, New York</span>
                    </p>
                    <p className="mb-5 flex gap-3 items-center">
                        <i className="inline-block text-2xl p-2 bg-[#EF1D26] rounded-2xl">
                            <FiMail></FiMail>
                        </i>
                        <span className="">info@example.com</span>
                    </p>
                </div>
                <div className="flex-1 flex justify-center gap-4">
                    <div>
                        <h3 className="text-2xl font-bold mb-7">Quick Links</h3>
                        <hr />
                        <ul className="mt-7">
                            <li className="mb-5">
                                <a href="*">About Us</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Update News</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Testimonials</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Terms Of Service</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Privacy policy</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Our Dealers</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-7">
                            Support Center
                        </h3>
                        <hr />
                        <ul className="mt-7">
                            <li className="mb-5">
                                <a href="*">FAQ's</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Affiliates</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Booking Tips</a>
                            </li>
                            <li className="mb-5">
                                {" "}
                                <a href="*">Sell Vehicles</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Privacy policy</a>
                            </li>
                            <li className="mb-5">
                                <a href="*">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-7">Newsletter</h3>
                    <hr />
                    <p className="my-7">
                        Subscribe Our Newsletter To Get <br /> Latest Update And
                        News
                    </p>
                    <input
                        className="mb-7 py-3 px-4 rounded"
                        placeholder="Your Email"
                        type="text"
                    />
                    <br />
                    <button className="btn py-3 px-12">
                        SubsCribe Now{" "}
                        <i className="text-2xl">
                            <BiLogoTelegram />
                        </i>{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
