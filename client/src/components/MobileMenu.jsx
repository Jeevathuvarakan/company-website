import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderItems, Logo } from "../constants/Data";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const MobileMenu = ({ closeMobileMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = (section) => {
    navigate(`/?scrollTo=${section}`);
    closeMobileMenu();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMobileMenu();
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const path = location.pathname;
    const link = path.includes("home")
      ? "home"
      : path.includes("products")
      ? "products"
      : path.includes("contactus")
      ? "contactus"
      : "home";
    setActiveLink(link);
  }, [location.pathname]);

  return (
    <div className="fixed p-[24px] z-50 bg-black text-white bg-opacity-75 justify-center items-center w-full h-full flex flex-col">
      <span className="flex justify-between w-full items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[142px] h-[56px] object-cover"
          />
        </Link>
        <IoCloseOutline
          className="text-[44px] cursor-pointer"
          onClick={closeMobileMenu}
        />
      </span>
      <div className="flex flex-col gap-[60px] relative top-[80px] flex-grow font-AtkinsonHyperlegible">
        {/* Menu Items */}
        <div className="flex flex-col gap-[24px] items-center justify-center ">
          {HeaderItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="py-[15px] px-[20px] font-normal items-center flex gap-[8px] transition duration-300 pb-4"
              onClick={() => handleLinkClick(item.path)}
            >
              <p
                className={`cursor-pointer text-[24px] font-Raleway transition duration-300 ${
                  activeLink === item.path ? "text-[#95FF00]" : "text-white"
                } hover:text-[#95FF00]`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="border border-solid-[1px] border-[#95FF00] w-[240px] "></div>
        <div className="flex flex-col gap-[6px] text-white items-center">
          <p className="text-[18px] hover:text-[#95FF00]">Follow Us</p>
          <div className="flex gap-[12px]">
            <Link to="https://www.instagram.com/ayio_drinks?igsh=aHA2ZDRjemZtdnJk">
              <FaInstagram className="md:text-[38px] text-[28px] hover:text-[#95FF00]" />
            </Link>
            <Link to="https://www.facebook.com/share/1DusYrBJML/">
              <FaFacebookF className="md:text-[37px] text-[27px] hover:text-[#95FF00]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
