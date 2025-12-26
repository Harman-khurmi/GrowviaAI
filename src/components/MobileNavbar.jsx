// import React from "react";
// import { navItems } from "../assets/assets";

// const MobileNavbar = ({ isOpen }) => {
//   return (
//     <div
//       className={`
//         sm:hidden overflow-hidden
//         transition-all duration-300 ease-out absolute w-full backdrop-blur-3xl z-10
//         ${isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"}
//       `}
//     >
//       <div
//         className={`navbar-mobile
//           ${isOpen ? "translate-y-0" : "-translate-y-8"}
//         `}
//       >
//         {navItems.map((item, index) => (
//           <a
//             key={index}
//             href={item.link}
//             className="nav-items-mobile"
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileNavbar;
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
// import React from "react";
// import { mobileNavItems } from "../assets/assets";

// const MobileNavbar = ({ isOpen, navbarHeight }) => {
//   return (
//     <div
//       className={`
//         sm:hidden fixed left-0 w-full z-50
//         transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
//         ${isOpen ? "translate-y-0" : "-translate-y-full"}
//       `}
//       style={{ top: `${navbarHeight}px` }}
//     >
//       <div
//         className="
//           w-full
//           bg-bg-light dark:bg-bg-dark
//           backdrop-blur-3xl
//           border-b border-border/50 dark:border-border/40
//           rounded-b-2xl
//           shadow-2xl
//         "
//       >
//         <nav className="flex flex-col items-center py-10 gap-6">
//           {mobileNavItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="
//                 text-lg font-semibold
//                 text-text-primary dark:text-white
//                 transition-colors duration-200
//                 hover:text-primary
//                 active:scale-95
//               "
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default MobileNavbar;
