// import React from 'react'

// const ServiceCard = ({ icon, title, description }) => {

//     const [positon, setPosition] = React.useState({ x: 0, y: 0 });
//     const [visible, setVisible] = React.useState(false);

//     const divRef = React.useRef(null);

//     const handleMouseMove = (e) => {
//         const rect = divRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         setPosition({ x, y });
//     }

//     return (
//         <>
//             <div className=' relative overflow-hidden max-w-lg m-2 sm:m-4  rounded-x1 border border-gray-200 rounded-xl dark:border-gray-700 shadow-2x1 shadow-gray-100 dark:shadow-white/10' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>

//                 {/* <div className={`flex relative container border-border/50 dark:border-border/40 border-2 rounded-lg py-8 md:py-9 px-8 md:px-12 gap-8 sm:gap-6 md:gap-4 content-center items-center justify-center  dark:bg-text-secondary/30 mx-auto transition-all duration-500 ease-in `}> */}

//                 <div style={{ top: positon.y - 90, left: positon.x - 90 }} className={`pointer-events-none rounded-lg bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 md:w-75 md:h-75 blur-lg  w-50 h-50 absolute z-0 transition-opacity duration-500 mix-blend-lighten  ${visible ? 'opacity-70' : 'opacity-0'} `} />

//                 <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

//                     {/* <div className={`pointer-events-none rounded-lg blur-sm absolute z-0 w-full h-full transition-all duration-500 mix-blend-lighten top-${positon.y - 150} left-${positon.x - 150} ${visible ? 'opacity-100' : 'opacity-0'} `} /> */}


//                     <div className='flex min-w-[20%]'>
//                         <img src={icon} alt="service-icons" draggable="false" className='size-11 md:size-13 lg:size-17 p-2 md:p-3 lg:p-4 bg-bg-light dark:bg-bg-dark ring-8 ring-primary/10 rounded-full outline-none icon-primary bg-clip-text
//                 '/>
//                     </div>
//                     <div className='flex flex-col text-left gap-1 max-w-[75%]'>
//                         <h3 className='font-semibold'>{title}</h3>
//                         <p className='text-dark-text/75
//                 dark:text-light-text-dull'>{description}</p>
//                     </div>
//                 </div>
//             </div>
//             {/* </div> */}
//         </>
//     )
// }

// export default ServiceCard

import { useState } from "react";

const ServiceCard = ({ icon, title, description }) => {
    const [active, setActive] = useState(false);

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        e.currentTarget.style.setProperty("--x", `${x}%`);
        e.currentTarget.style.setProperty("--y", `${y}%`);
    };

    return (
        <div
            onMouseMove={handleMove}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            // onClick={() => setActive((p) => !p)}
            className={`
        relative mx-auto flex items-center
        rounded-lg py-7 lg:py-9
        border-2 border-border/50 dark:border-border/40
        dark:bg-text-secondary/30
        transition-all duration-500 ease-out
        px-8 md:px-6 lg:px-10 lg:pl-18 gap-x-6

        before:absolute before:-inset-1 before:rounded-lg
        before:p-0.5 before:opacity-0
        before:transition-opacity before:duration-500

        hover:before:opacity-100
        ${active ? "before:opacity-100" : ""}
      `}
            style={{
                backgroundClip: "padding-box",
            }}
        >
            {/* Gradient Border Layer */}
            <div
                className={`
          pointer-events-none absolute -inset-1 rounded-xl
          opacity-0 transition-opacity duration-500
          ${active ? "opacity-100" : "group-hover:opacity-100"}
        `}
                style={{
                    background: `
            radial-gradient(
              300px circle at var(--x, 50%) var(--y, 50%),
              rgba(29,191,115,0.9),
              rgba(29,191,115,0.8),
              rgba(55,157,255,0.5),
              transparent 75%
            )
          `,
                    mask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
                    WebkitMask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "3px",
                }}
            />

            {/* Content */}
            <div className="relative z-1 flex min-w-[20%]">
                <img
                    src={icon}
                    alt="service-icons"
                    draggable="false"
                    className="
            size-11 md:size-13 lg:size-17 p-2 md:p-3 lg:p-4 bg-bg-light dark:bg-bg-dark ring-8 ring-primary/10 rounded-full outline-none icon-primary bg-clip-text
          "
                />
            </div>

            <div className="relative z-1 flex flex-col text-left gap-1">
                <h3 className="font-semibold md:text-base lg:text-lg">{title}</h3>
                <p className="text-dark-text/75 dark:text-light-text-dull md:text-sm lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;



