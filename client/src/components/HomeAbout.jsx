import React from 'react'
import { ImgFour, ImgOne, ImgThree, ImgTwo } from '../constants/Data';

function HomeAbout() {
  return (
    <div className="xl:px-[180px] px-[16px] py-[60px] bg-[#e8ebf7] font-DMSans">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[18px]">
            <h4 className="text-[14px] font-light">ABOUT US</h4>
            <h2 className="text-[48px] xl:w-[408px] w-full font-bold text-[#2C3A04] capitalize">
              Our journey of compassion and hope
            </h2>
            <p className="xl:w-[408px] w-full text-[#46512A]">
              Join us on a journey towards compassion and hope. Through our
              non-profit organisation, we strive to make a positive impact on
              the world. Give back to your community and be a part of something
              greater than yourself.
            </p>
            <p className="xl:w-[408px] w-full text-[#46512A] pb-[10px]">
              A transformational journey towards bringing hope and compassion to
              the world.
            </p>
            <button className="w-[180px] text-[16px] text-[#2c3a04] border border-solid-[1px] px-[8px] py-[14px] border-[#2c3a04] rounded-[4px] font-medium  hover:text-black hover:border-black">
              Read More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <img src={ImgOne} alt="Image" className="" />
            <img src={ImgTwo} alt="Image" className="" />
            <img src={ImgFour} alt="Image" className="" />
            <img src={ImgThree} alt="Image" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout