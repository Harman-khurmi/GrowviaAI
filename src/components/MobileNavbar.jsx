import React from "react";
import { mobileNavItems } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

//  ${ isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0" }
const MobileNavbar = ({ isOpen, navbarHeight }) => {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      style={{
        top: `${navbarHeight - 4}px`,
        originY: "top",
      }}
      className={`
        sm:hidden overflow-hidden rounded-b-xl
        transition-all duration-300 ease-out fixed w-full z-2 shadow-2xl/40 shadow-dark-text dark:shadow-zinc-950
       
      `}
    >
      <div
        className={`navbar-mobile
          
        `}
      >
        {mobileNavItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            variants={itemVariants}
            className="nav-items-mobile"
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileNavbar;


const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      ease: "easeOut",
      duration: 0.35,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren", // 👈 THIS MAKES OUT ANIMATION WORK
      staggerChildren: 0.06,
      staggerDirection: -2, // 👈 reverse stagger (important)
      ease: "easeIn",
      duration: 0.25,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
  closed: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2 },
  },
};

