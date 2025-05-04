import React from "react";
import { ImgFour, ImgOne, ImgThree, ImgTwo } from "../constants/Data";
import { motion } from "framer-motion";

function HomeAbout() {
  return (
    <div className="xl:px-[180px] px-[16px] py-[60px] bg-[#e8ebf7] font-DMSans">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between w-full gap-10">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[18px] xl:w-1/2"
          >
            <h4 className="text-[14px] font-light">ABOUT US</h4>
            <h2 className="md:text-[48px] text-[32px] xl:w-[408px] w-full font-bold text-[#2C3A04] capitalize">
              Our journey of compassion and hope
            </h2>
            <p className="xl:w-[408px] w-full text-[#46512A] text-[16px]">
              Join us on a journey towards compassion and hope. Through our
              non-profit organisation, we strive to make a positive impact on
              the world. Give back to your community and be a part of something
              greater than yourself.
            </p>
            <p className="xl:w-[408px] w-full text-[#46512A] pb-[10px] text-[16px]">
              A transformational journey towards bringing hope and compassion to
              the world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:w-[180px] w-[140px] md:justify-start justify-center md:text-[16px] text-[14px] text-[#2c3a04] border border-solid-[1px] px-[8px] py-[14px] border-[#2c3a04] rounded-[6px] font-medium hover:text-black hover:border-black"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Images Section */}
          <div className="xl:w-1/2 w-full">
            <div className="flex flex-col gap-4">
              {/* First Row */}
              <div className="flex flex-col xl:flex-row gap-4">
                {/* ImgOne - Large */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full xl:w-1/2"
                >
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={ImgOne}
                      alt="ImgOne"
                      className="w-full h-[220px] xl:h-[320px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* ImgTwo - Small, aligned to bottom */}
                <div className="w-full xl:w-1/2 flex items-end">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={ImgTwo}
                        alt="ImgTwo"
                        className="w-full h-[180px] xl:h-[220px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col xl:flex-row gap-4">
                {/* ImgFour - Small */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full xl:w-1/2"
                >
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={ImgFour}
                      alt="ImgFour"
                      className="w-full h-[180px] xl:h-[220px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* ImgThree - Large */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-full xl:w-1/2"
                >
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={ImgThree}
                      alt="ImgThree"
                      className="w-full h-[220px] xl:h-[320px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
