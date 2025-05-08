import React from "react";
import {WhitweLogo } from "../constants/Data";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="xl:px-[180px] px-[16px] py-[32px] bg-[#0f1131] font-LibreFranklin text-white">
      <div className="container mx-auto py-[10px]">
        <div className="flex lg:flex-row flex-col gap-[20px] justify-between">
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <img
                // src={WhitweLogo}
                alt="logo"
                className="object-cover w-[300px] h-[50px]"
              />
              {/* <h3 className="text-[24px] font-semibold ">Codeme Labs</h3> */}
            </div>
            <p className="lg:w-[596px] w-full text-[16px]  font-medium">
            Codeme Labs delivers smart, scalable software solutions tailored to your needs. 
            From web to enterprise apps, we turn your ideas into powerful digital products.
            </p>
            <div className="flex gap-[12px]">
            <Link to="/">
              <div className="border rounded-full p-[8px] ">
                <FaFacebook className="text-white" />
              </div>
            </Link>
            <Link to="/">
              <div className="border rounded-full p-[8px] ">
                <IoLogoWhatsapp className="text-white" />
              </div>
            </Link>
            <Link to="/">
              <div className="border rounded-full p-[8px] ">
                <FaLinkedin className="text-white" />
              </div>
            </Link>
            <Link to="/">
              <div className="border rounded-full p-[8px] ">
                <FaInstagramSquare className="text-white" />
              </div>
            </Link>
            <Link to="/">
              <div className="border rounded-full p-[8px] ">
                <FaSquareXTwitter className="text-white" />
              </div>
            </Link>
            </div>
          </div>
          <div className="flex md:gap-[60px] gap-[32px] md:flex-row flex-wrap">
            <div className="flex flex-col gap-[8px]">
              <p>Quick Links</p>
              <div className="flex flex-col gap-[12px]">
                <Link to="/">
                  <p className="hover:text-[#0067ff]">Home</p>
                </Link>
                <Link to="/">
                  <p className="hover:text-[#0067ff]">About Us</p>
                </Link>
                <Link to="/">
                  <p className="hover:text-[#0067ff] text-nowrap">
                    How We Work
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>Contact Us</p>
              <div className="flex flex-col gap-[12px] text-[16px] w-full">
                <div className="flex gap-[8px] items-center">
                  <FaLocationDot />
                  <p>Jaffna, Sri Lanka, 40000</p>
                </div>
                <div className="flex gap-[8px] items-center">
                  <IoCall />
                  <p>+94 77 986 8256</p>
                </div>
                <div className="flex gap-[8px] items-center">
                  <IoMail />
                  <p>codemelabs@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-solid border-b-[1px] w-full"></div>
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between  py-[10px]">
          <p className="text-[14px] text-white font-Manrope md:text-start text-center ">
            Copyright © 2024 CodemeLabs.
          </p>
          <div className="flex md:flex-row  flex-col  md:gap-[16px] gap-[4px] items-center">
          <Link to="/">
            <p className="text-[14px] text-white font-Manrope">
              Term of Services
            </p>
          </Link>
          <Link to="/">
            <p className="text-[14px] text-white font-Manrope">
              Privacy Policy
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
