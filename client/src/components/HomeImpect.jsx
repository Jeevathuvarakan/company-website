import React from "react";
import CountUp from "react-countup";

function HomeImpect() {
    return (
        <div className="xl:px-[180px] px-[16px] py-[60px] bg-[#fff] font-DMSans">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row justify-between w-full gap-10">
                    <div>
                        <div>
                        <h4 className="text-[14px] font-light uppercase">OUR IMPACT</h4>
                        </div>
                        <div className="flex gap-[18px] gap-x-[100px]">
                            <div>
                                <h2 className="text-[3rem] font-semibold tracking-[-1px]">
                                    The impact we have made till this date
                                </h2>
                            </div>
                            <div>
                                <p className="text-[16px] leading-6">
                                    We have made a significant impact in our community through our
                                    non-profit organization. By providing services and support to
                                    those in need, we have created a positive change. Our efforts
                                    have helped to improve the lives of many and we are committed
                                    to continuing to make a difference.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-[18px] py-[100px]">
                            <div className="flex flex-col gap-[10px] px-[50px] border-r-[2px]">
                                <div className="min-w-[150px] text-[48px] font-semibold leading-5">
                                    <span className="inline-block w-[100px] text-right">
                                        <CountUp start={0} end={20} duration={5} separator="," />
                                    </span>
                                    <span>M+</span>
                                </div>
                                <div className="flex">People served world wide</div>
                            </div>

                            <div className="flex flex-col gap-[10px] px-[50px] border-r-[2px]">
                                <div className="min-w-[150px] text-[48px] font-semibold leading-5">
                                    <span className="inline-block w-[100px] text-right">
                                        <CountUp start={0} end={142790} duration={5} separator="," />
                                    </span>
                                </div>
                                <div className="flex">Projects Funded</div>
                            </div>

                            <div className="flex flex-col gap-[10px] px-[50px] border-r-[2px]">
                                <div className="min-w-[150px] text-[48px] font-semibold leading-5">
                                    <span className="inline-block w-[100px] text-right">
                                        <CountUp start={0} end={1.8} duration={5} decimals={1} separator="," />
                                    </span>
                                    <span>M</span>
                                </div>
                                <div className="flex">People to take action</div>
                            </div>

                            <div className="flex flex-col gap-[10px] px-[50px]">
                                <div className="min-w-[150px] text-[48px] font-semibold leading-5">
                                    <span className="inline-block w-[100px] text-right">
                                        <CountUp start={0} end={5246} duration={5} separator="," />
                                    </span>
                                </div>
                                <div className="flex">Partner organizations</div>
                            </div>
                        </div>

                        <div className="flex gap-[18px] py-[20px] rounded-2xl bg-[#66B40B] p-12">
                            <div className="p-6">
                                <h3 className="text-[40px]  text-white">
                                    We can create a better tomorrow
                                </h3>
                                <p className="text-[20px] text-white">
                                    Every dollar counts and helps us bring hope and essential
                                    resources to those in need.
                                </p>
                            </div>
                            <div className="items-justify p-6">
                                <button className=" text-[18px] font-semibold text-black  px-[18px] py-[14px] bg-[#fff] rounded-[5px]   hover:bg-[#46512a] hover:text-white">
                                    Scheduling a call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeImpect;
