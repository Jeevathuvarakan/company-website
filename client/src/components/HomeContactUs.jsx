import React, { useState } from "react";
import axios from 'axios';
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

function HomeContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/booking', formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    //main div
    <>
      <div className="xl:px-[180px] px-[16px] py-[60px] bg-[#e8ebf7] font-DMSans">
        <div className="container mx-auto ">
          <div className="py-[10px] flex lg:flex-row flex-col gap-[24px] justify-between items-center ">
            <div className="flex flex-col md:gap-[20px] gap-[14px] ">
              <h5 className="text-[20px] text-[#000] uppercase w-full ">
                Contact Us
              </h5>
              <h1 className="text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[590px] w-full ">
                have anything to ask ? ask us anything as you like
              </h1>
              <p className="text-[16px] text-[#444444] lg:w-[516px] w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[20px] items-center">
                  <div className="">
                    <div className="bg-[#0f1131] flex items-center justify-center rounded-full md:w-[65px] w-[55px] md:h-[65px] h-[55px]">
                      <MdCall className=" text-white md:text-[36px] text-[30px] " />
                    </div>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[18px]  w-full text-justify text-black">
                      Phone Number
                    </p>
                    <p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
                      077-123-4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-[20px] items-center">
                  <div className="">
                    <div className="bg-[#0f1131] flex items-center justify-center rounded-full md:w-[65px] w-[55px] md:h-[65px] h-[55px]">
                      <CgMail className=" text-white md:text-[40px] text-[32px] " />
                    </div>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[18px]  text-justify text-black">
                      E-Mail
                    </p>
                    <p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
                      tjeevathuvarakan@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-[20px] items-center">
                  <div className="">
                    <div className="bg-[#0f1131] flex items-center justify-center rounded-full md:w-[65px] w-[55px] md:h-[65px] h-[55px]">
                      <FaLocationDot className=" text-white md:text-[36px] text-[30px]" />
                    </div>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[18px]  w-full text-justify text-black">
                      {" "}
                      Location{" "}
                    </p>
                    <p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
                      {" "}
                      Alaveddy Center, Jaffna, Sri Lanka{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] p-[12px] lg:max-w-[800px] w-full">
              <h1 className="text-[#151515] capitalize lg:text-[32px] md:text-[24px] text-[20px] font-bold  lg:leading-[58px]">
                Fill the Form Below
              </h1>
              <form className="w-full onSubmit={handleSubmit}">
                <div className="flex flex-col gap-[18px] ">
                  <div className="flex md:gap-[20px] gap-[18px] md:flex-row flex-col w-full">
                    <div className=" w-full flex flex-col gap-[6px]">
                      <label className="text-[16px] font-semibold">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-[50px] p-[15px] text-sm bg-[#F7F7F7] text-[#333] rounded-md"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col gap-[6px]">
                      <label className="text-[16px] font-semibold">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-[50px]  p-[15px] text-sm bg-[#F7F7F7] text-[#333] rounded-md"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[16px] font-semibold">Mobile :</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      id="mobile"
                      className="form-control w-full h-[50px]  p-[15px] text-sm bg-[#fff] text-[#333] rounded-md"
                      placeholder="e.g., +94712345678"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[16px] font-semibold">Message</label>
                    <textarea
                      type="text"
                      name="message"
                      value={formData.message}
                        onChange={handleChange}
                      className="w-full h-[120px]  p-[15px] text-sm bg-[#F7F7F7] text-[#333] rounded-md"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <div className="">
                    <button className=" text-[16px] text-white  px-[24px] py-[12px] w-full bg-[#0067ff] rounded-md font-medium  hover:bg-[#242971] ">
                      SUBMIT NOW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContactUs;
