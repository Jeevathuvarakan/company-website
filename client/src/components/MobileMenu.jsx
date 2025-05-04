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
    <div className="fixed p-[24px] z-50 bg-white text-black bg-opacity-75 justify-center items-center w-full h-full flex flex-col">
      <div className="flex flex-col gap-[24px] relative top-[80px] flex-grow font-LibreFranklin">
        {/* Menu Items */}
        <div className="flex flex-col gap-[4px] items-center justify-center ">
          {HeaderItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="py-[12px] px-[20px] font-normal items-center flex gap-[8px] transition duration-300 pb-4"
              onClick={() => handleLinkClick(item.path)}
            >
              <p
                className={`cursor-pointer text-[16px] font-Raleway transition duration-300 ${
                  activeLink === item.path ? "text-[#0067ff]" : "text-black"
                } hover:text-[#0067ff]`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-[6px] text-white items-center">
          <button className="text-[16px] text-[#0067ff] border border-solid-[1px] px-[8px] py-[4px] border-[#0067ff] rounded-[4px] font-medium hover:text-black hover:border-black">
            Call To Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
