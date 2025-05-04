import React from 'react'

function HeroBanner() {
  return (
    <div className="xl:px-[180px] px-[16px] lg:py-[100px] md:py-[60px] py-[32px] font-LibreFranklin bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:gap-[24px] gap-[20px] items-center">
          <h4 className="text-[16px] uppercase text-[#0067ff] font-semibold pb-[10px] text-center">
            Empowering Businesses Through Innovative Digital Solutions
          </h4>
          <h1 className="lg:text-[54px] md:text-[48px] text-[38px] text-center xl:w-[780px] w-full font-semibold pb-[14px]">
            We Build Software Solutions That Drive Innovation and Growth
          </h1>
          <p className="text-center text-[18px] text-[#454F5E] xl:w-[780px] w-full pb-[10px]">
            At Codeme Labs, we create smart software solutions tailored to your
            vision and business goals - with your success at the heart of
            everything we do.
          </p>
          <button className=" text-[16px] text-white  px-[24px] py-[12px] bg-[#0067ff] rounded-[4px] font-medium  hover:bg-[#2c2ea8] ">
            Call To Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner