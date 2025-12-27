import React, { useState, useRef, useEffect } from "react";
import assets from "../assets/assets";
import { navItems, icons } from "../assets/assets";
const IconComponent = icons;
import Button from "./Button";
import MobileNavbar from "./MobileNavbar";
import ThemeToggleBtn from "./ThemeToggleBtn";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease:easeInOut}}

        ref={navbarRef} id="#" className="Navbar text-dark-text dark:text-light-text">
        {/* logo */}
        <a href="#">
          <img
            src={theme === "dark" ? assets.lightLogo : assets.darkLogo}
            alt="logo"
            draggable="false"
            className="max-w-36 cursor-pointer"
          />
        </a>
        {/* sidebar toggle button */}

        {/* nav items */}
        <div>
          {navItems.map((item, index) => {
            return (
              <a key={index} href={item.link} className="nav-items">
                {item.name}
              </a>
            );
          })}
        </div>

        {/* toggle section */}
        <div className="flex items-center justify-between gap-4">

          {/* theme toggle button */}
          <span className="inline-block">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          </span>

          {/* contact us btn */}
          <span className="hidden md:inline-block">
            <Button text={"Contact Us"} icon={icons.arrowRightIcon} location={"#contactUs"} />
          </span>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden justify-end flex dark:text-light-text text-dark-text"
          >
            {isSidebarOpen ? (
              <IconComponent.closeIcon className="w-7.5 h-8 md:w-8" />
            ) : (
              <IconComponent.menuIcon className="w-7.5 h-8 md:w-8" />
            )}
          </button>

        </div>

      </motion.div>

      {/* Mobile Navbar */}
      <div className="relative z-10">
        {isSidebarOpen && <MobileNavbar isOpen={isSidebarOpen} navbarHeight={navbarHeight} />}
      </div>
    </>
  );
};

export default Navbar;