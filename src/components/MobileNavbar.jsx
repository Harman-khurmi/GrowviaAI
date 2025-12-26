import React from "react";
import { mobileNavItems } from "../assets/assets";

const MobileNavbar = ({ isOpen, navbarHeight }) => {
  return (
    <div
      className={`
        sm:hidden overflow-hidden rounded-b-xl
        transition-all duration-300 ease-out fixed w-full z-2 shadow-2xl/50 shadow-dark-text dark:shadow-zinc-950
        ${isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"}
      `}
      style={{ top: `${navbarHeight-4}px` }}
    >
      <div
        className={`navbar-mobile
          ${isOpen ? "translate-y-0" : "-translate-y-8"}
        `}
      >
        {mobileNavItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="nav-items-mobile"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;