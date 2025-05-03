import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { HeaderItems, Logo } from "../constants/Data";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      setScrollPosition(scrollTop);
      setHideHeader(scrollTop > viewportHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="px-[16px] fixed z-50 top-0 py-[8px] bg-white text-black w-full font-LibreFranklin ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
              {/* <img
                src={Logo}
                alt="logo"
                className="w-[112px] h-[50px] object-cover"
              /> */}
              <h1 className="font-semibold text-[20px]">CodeMe Labs</h1>
            </Link>

            <div className="lg:block hidden">
              <div className="flex gap-[10px] items-center">
                <div className="flex">
                  {HeaderItems.map((item, index) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`py-[10px] xl:px-[20px] lg:px-[8px] font-LibreFranklin items-center flex gap-[48px] text-[16px] font-medium
                          ${
                            isActive ? "text-[#0067ff]" : "text-black"
                          } hover:text-[#0067ff]`}
                        onClick={() => window.scrollTo({ top: 0 })}
                      >
                        <p
                          className={`cursor-pointer text-[20px] 
                            ${
                              isActive ? "text-[#0067ff]" : "text-black"
                            } hover:text-[#0067ff]`}
                        >
                          {item.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex  items-center">
              <button className="text-[16px] text-[#0067ff] border border-solid-[1px] px-[8px] py-[4px] border-[#0067ff] rounded-[4px] font-medium">
                Call To Action
              </button>

              <div className="flex gap-[12px] items-center lg:hidden">
                <div className="flex justify-start h-full w-full">
                  <button
                    className="text-black text-[36px]"
                    onClick={toggleMobileMenu}
                    aria-label="Open menu"
                  >
                    {isMobileMenuOpen ? <IoCloseOutline /> : <IoIosMenu />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed lg:hidden block top-0 w-full h-full bg-black z-20 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-full w-[100%]`}
      >
        <MobileMenu closeMobileMenu={toggleMobileMenu} />
      </div>
    </>
  );
}

export default Header;
